const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');

knl.post('logon', async (req, resp) => {
    const schema = Joi.object({
        matricula : Joi.string().max(100).min(1).required(),
        password : Joi.string().max(16).min(6).required()
    });

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Student.findAll({
        where : {
            matricula : req.body.matricula,
            password : md5(req.body.password)
        }
    })

    knl.createException('0005', '', knl.objects.isEmptyArray(result));
    
    const user = knl.objects.copy(result[0]);
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    resp.json({
        token : jwt.sign(user.id),
        user  : user
    
    });

}, securityConsts.USER_TYPE_PUBLIC);
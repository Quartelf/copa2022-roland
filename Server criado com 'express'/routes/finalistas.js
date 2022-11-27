const Joi = require("joi");
const knl = require("../knl");
const securityConsts = require('../consts/security-consts');

knl.post("finalistas", async (req, resp) => {
  const schema = Joi.object({
    fkstudent: Joi.string().min(1).max(280).required(),
    finalistas: Joi.string().min(1).max(280).required(),
  });

  knl.validate(req.body, schema);

  const user = knl.sequelize().models.Finalistas.build({
    fkstudent: req.body.fkstudent,
    finalistas: req.body.finalistas
    });

  await user.save();
  resp.end();
}, securityConsts.USER_TYPE_PUBLIC);

knl.get("student", async (req, resp) => {
  const result = await knl.sequelize().models.Finalistas.findAll();

  resp.json(result);
});
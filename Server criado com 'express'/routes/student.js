const Joi = require("joi");
const knl = require("../knl");
const securityConsts = require('../consts/security-consts');
const md5 = require('../utils/md5-pass');

knl.post("student", async (req, resp) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(280).required(),
    matricula: Joi.string().min(1).max(280).required(),
    password: Joi.string().min(1).max(280).required()
    });

  knl.validate(req.body, schema);

  const user = knl.sequelize().models.Student.build({
    name: req.body.name,
    matricula: req.body.matricula,
    password: md5(req.body.password)
  });

  await user.save();
  resp.end();
}, securityConsts.USER_TYPE_PUBLIC);



knl.get("student", async (req, resp) => {
  const result = await knl.sequelize().models.Student.findAll();

  resp.json(result);
});

// knl.patch("student/:id", async (req, resp) => {
//   id = req.params.id;
//   const result = await knl.sequelize().models.Student.update(
//     {
//       status: "0",
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   );
//   resp.send("id desativado");
// });

// knl.delete("student/:id", async (req, resp) => {
//   const result = await knl.sequelize().models.Student.destroy({
//     where: {
//       id: req.body.id,
//     },
//   });
//   req.send(user);
// });
const Joi = require("joi");
const knl = require("../knl");

knl.post("results", async (req, resp) => {

  const schema = Joi.object({
    grupoa: Joi.string().min(1).max(100).required(),
    grupob: Joi.string().min(1).max(100).required(),
    grupoc: Joi.string().min(1).max(100).required(),
    grupod: Joi.string().min(1).max(100).required(),
    grupoe: Joi.string().min(1).max(100).required(),
    grupof: Joi.string().min(1).max(100).required(),
    grupog: Joi.string().min(1).max(100).required(),
    grupoh: Joi.string().min(1).max(100).required(),
    fkstudent: Joi.string().min(1).max(100).required(),
  });

  knl.validate(req.body, schema);


  const result = await knl.sequelize().models.Results.update(
        {
          status: "0",
        },
        {
          where: {
            fkstudent: req.body.fkstudent
          },
        }
      );
      

knl.createException('0005', '', knl.objects.isEmptyArray(result));


  const user = knl.sequelize().models.Results.build({
    grupoa: req.body.grupoa,
    grupob: req.body.grupob,
    grupoc: req.body.grupoc,
    grupod: req.body.grupod,
    grupoe: req.body.grupoe,
    grupof: req.body.grupof,
    grupog: req.body.grupog,
    grupoh: req.body.grupoh,
    fkstudent: req.body.fkstudent,
    status: 1
  });
  await user.save();
  await user.save();
  resp.end();
})
  
knl.get("results/:matricula", async (req, resp) => {
  const result = await knl.sequelize().models.Results.findAll({where : {
    fkstudent : req.params.matricula,
    status : 1
  }
});

  knl.objects.copy(result)

  resp.json(result);
});

// knl.patch("product/:id", async (req, resp) => {
//   id = req.params.id;
//   const result = await knl.sequelize().models.Product.update(
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

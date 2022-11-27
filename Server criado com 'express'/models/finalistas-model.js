const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Finalistas', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        finalistas: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        fkstudent : {
          type: Sequelize.STRING(100),
          allowNull: false,
        }
   })
}
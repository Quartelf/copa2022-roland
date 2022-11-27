const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Results', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        grupoa: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupob: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupoc: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupod: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupoe: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupof: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupog: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        grupoh: {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        fkstudent : {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
   })
}
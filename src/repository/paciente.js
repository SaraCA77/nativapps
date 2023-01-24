'use strict'

module.exports = (sequelize, DataTypes) => {
    const  Paciente = sequelize.define('paciente', {
        patientid: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id: {
            allowNull: true,
            type: DataTypes.STRING
        },
        firstname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: true,
            type: DataTypes.STRING
        }
    },{
        freezeTableName: false,
        tableName: "paciente"
    });
    return Paciente
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('step', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
           // autoIncrement: true
          },
          step: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {timeStamps: false,
        createdAt: false, // don't add createdAt attribute
        updatedAt: false});
};
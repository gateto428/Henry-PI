const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('typediet', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
           // autoIncrement: true
          },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {timeStamps: false,
        createdAt: false, // don't add createdAt attribute
        updatedAt: false});
};
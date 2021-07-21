const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('platform', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};
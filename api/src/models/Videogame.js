const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    background_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
    /* platforms: {
    type: DataType.STRING,
    allowNull: false,
    } */
  });
};

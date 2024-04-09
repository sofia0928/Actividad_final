import { DataTypes } from "sequelize";
import { conexion } from "../conexions.js";


const Categoria = conexion.define(
  "categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "categoria",
    timestamps: true,
  }
);

export default Categoria;


import { DataTypes } from "sequelize";
import { conexion } from "../conexions.js";
import Categoria from "./categoria.js";


const Producto = conexion.define(
  "Producto",
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
    tableName: "Producto",
    timestamps: true,
  }

);
Categoria.hasMany(Producto, { foreignKey: "CategoriaId" });
Producto.belongsTo(Categoria, { foreignKey: "CategoriaId" });


export default Producto;

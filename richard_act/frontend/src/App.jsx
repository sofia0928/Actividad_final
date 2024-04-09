import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AgregarProductos from "./Pages/General/Productos/agregar/AgregarProductos";

import ListaProductos from "./Pages/General/Productos/productos";
import ListaCategorias from "./Pages/General/Categorias/categorias";
import AgregarCategorias from "./Pages/General/Categorias/agregar/agregar";
import EditarCategorias from "./Pages/General/Categorias/editar/editarcategorias";
import EditarProductos from "./Pages/General/Productos/editar/editar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/listaProductos" element={<ListaProductos />} />
        <Route path="/agregarProductos" element={<AgregarProductos />} />
        <Route path="/editarproductos/:id" element={<EditarProductos />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/agregarCategoria" element={<AgregarCategorias />} />
        <Route path="/editarcategoria/:id" element={<EditarCategorias />} />
      </Routes>
    </Router>
  );
}

export default App;
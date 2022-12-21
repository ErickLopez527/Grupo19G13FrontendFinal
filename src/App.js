import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './componentes/Login';
import CrearCuenta from './componentes/CrearCuenta';
import Admin from './componentes/Admin';
import Contacto from './componentes/Contacto';
import EventosDelMes from './componentes/EventosDelMes';
import Home from './componentes/Home';
import CrearCategoria from './componentes/CrearCategoria';
import ActualizarCategoria from './componentes/ActualizarCategoria';
import HomeProductos from './componentes/productos/HomeProductos';
import CrearProducto from './componentes/productos/CrearProducto';
import Categorias from './componentes/Categorias';
import ActualizarProductos from './componentes/productos/ActualizarProductos';
import Lanzamientos from './componentes/Lanzamientos';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>} />
          <Route path="/admin" exact element={<Admin/>} />
          <Route path="/contacto" exact element={<Contacto/>} />
          <Route path="/eventosdelmes" exact element={<EventosDelMes/>} />
          <Route path="/lanzamientos" exact element={<Lanzamientos/>} />
          <Route path="/categorias" exact element={<Categorias/>} />
          <Route path="/crear-categorias" exact element={<CrearCategoria/>} />
          <Route path="/actualizar-categoria/:idCategoria" exact element={<ActualizarCategoria/>} />
          <Route path="/home-productos/:idCategoria" exact element={<HomeProductos/>} />
          <Route path="/crear-producto/:idCategoria" exact element={<CrearProducto/>} />
          <Route path="/actualizar-producto/:idproducto" exact element={<ActualizarProductos/>} />
      </Routes>
    </Router>
  );
}

export default App;
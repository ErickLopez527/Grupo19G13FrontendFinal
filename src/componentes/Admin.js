import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import swal from 'sweetalert';

const Admin = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token")
      //console.log(token)
      if (!token) {
        navigate("/login");
      }
    }
    autenticarUsuario()
  }, [navigate]);// [] hacen que solo se ejecute una vez el useEffect

  const [categoria, setCategorias] = useState([]);

  const cargarCategorias = async () => {
    const response = await crud.GET(`/api/categoria`);
    //console.log(response);
    setCategorias(response.categoria);
  }

  useEffect(() => {
    cargarCategorias();
  }, [])


  const borrarCategoria = async (idCategoria) => {
    swal({
      title: "Estas seguro de eliminar la categoria?",
      text: "una vez eliminado, no se podra recuperar esta categoria",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const response = crud.DELETE(`/api/categoria/${idCategoria}`);

          if (response) {
            swal("Tu categoria a sido borrada correctamente", {
              icon: "success",
            });
          }
          cargarCategorias();

        } else {
          swal("se cancelo la acción");
        }
      });
  }

  return (
    <>
      <Header />
      <div className='md:flex md:min-h-screen'>
      <Sidebar />
        <main className='flex-1 '>
          <div className='mt-10 flex justify-center'>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-black text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">
              LISTADO DE CATEGORIA
            </h1>
          </div>
          <table className="table table-bordered">
            <thead className='bg-white'>
              <tr>
                <th style={{ width: '34%' }}>Imagen</th>
                <th style={{ width: '33%' }}>Nombre</th>
                <th style={{ width: '33%' }}>Opciones</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {
                categoria.map(
                  item =>
                    <tr key={item._id}>
                      <td><img src={item.imagen} width="150" height="150" alt=''></img></td>
                      <td>{item.nombre}</td>
                      <div className='flex flex-col lg:flex-row gap-2'>
                        <td>
                          <Link
                            className="bg-green-400 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                            to={`/home-productos/${item._id}`}
                          >producto</Link>&nbsp;&nbsp;
                          <Link
                            className="bg-green-400 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                            to={`/actualizar-categoria/${item._id}`}

                          >Editar</Link>&nbsp;&nbsp;

                          <div className='flex flex-col lg:flex-row gap-2'>
                            <button
                              className="bg-green-400 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                              onClick={() => borrarCategoria(item._id)}
                            >Eliminar</button>
                          </div>
                        </td>
                      </div>
                    </tr>
                )
              }
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default Admin;
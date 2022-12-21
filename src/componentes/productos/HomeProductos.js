import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar'
import crud from '../../conexiones/crud';
import swal from 'sweetalert';


const HomeProductos = () => {

  const navigate = useNavigate();

  const { idCategoria } = useParams();

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

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await crud.GET(`/api/producto/${idCategoria}`);
    setProductos(response);
  }

  useEffect(() => {
    cargarProductos();
  }, []);

  const borrarProducto = async (idProducto) => {
    swal({
      title: "Estas seguro de eliminar le Producto?",
      text: "una vez eliminado, no se podra recuperar este Producto",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const response = crud.DELETE(`/api/producto/${idProducto}`);
          if (response) {
            swal("Tu Producto a sido borrado correctamente", {
              icon: "success",
            });
          }
          cargarProductos();
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
        <main className='flex-1'>
          <div className='mt-10 flex justify-center'>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-black text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">
              LISTA DE PRODUCTOS
            </h1>
          </div>
          <div className='p-12 justify-self-auto'>
            <Link
              to={`/crear-producto/${idCategoria}`}
              className='bg-green-500 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg'
            >Crear Producto</Link>
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
                productos.map(
                  item =>
                    <tr key={item._id}>
                      <td><img src={item.imagen} width="150" height="150" alt=''></img></td>
                      <td>{item.nombre}</td>
                      <td>
                        <div className='flex flex-col lg:flex-row gap-2'>
                          <Link
                            className="bg-green-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                            to={`/actualizar-producto/${item._id}`}

                          >Editar</Link>&nbsp;&nbsp;
                          <button
                            className="bg-green-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                            onClick={() => borrarProducto(item._id)}
                          >Eliminar</button>
                        </div>
                      </td>
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

export default HomeProductos;
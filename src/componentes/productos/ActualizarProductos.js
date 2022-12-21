import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar'
import crud from '../../conexiones/crud';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const ActualizarProductos = () => {

    const navigate = useNavigate();


    const { idproducto } = useParams();


    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        stock: '',
        precio: '',
        imagen: ''

    })


    const cargarProductos = async () => {
        const response = await crud.GET(`/api/producto/productos/${idproducto}`);
        console.log(response);
        setProducto(response.producto1);
    }

    const { nombre, descripcion, stock, precio, imagen } = producto;

    useEffect(() => {
        cargarProductos();
    }, []);

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const actualizarProducto = async () => {
        const data = {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio: producto.precio,
            imagen: producto.imagen,
            //idCategoria: producto.categoriaId

        }
        console.log(data, idproducto);
        const response = await crud.PUT(`/api/producto/${idproducto}`, data);
        console.log(response);
        const mensaje1 = "el producto se actualizo correctamente";
        swal({
            title: 'Información',
            text: mensaje1,
            icon: 'success',
            buttons: {
                confirm: {
                    text: 'OK',
                    value: true,
                    visible: true,
                    className: 'btn btn-primary',
                    closeModal: true
                }
            }
        });
        navigate("/admin");

    }

    const onSubmit = (e) => {
        e.preventDefault();
        actualizarProducto();
    }



    return (
        <>
            <Header />
            <div className='md:flex md:min-h-screen'>
            <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-black text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">
                            ACTUALIZAR PRODUCTOS
                        </h1>
                    </div>

                    <div className='mt-10 flex justify-center' >
                        <form
                            className='my-10 bg-white shadow rounded-lg p-10 '
                            onSubmit={onSubmit}
                        >
                            <label className='uppercase text-gray-600 block text-xl font-bold' >Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder='Nombre'
                                className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                value={nombre}
                                onChange={onChange}
                            />
                            <label className='uppercase text-gray-600 block text-xl font-bold' >descripción</label>
                            <input
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                placeholder='descripcion'
                                className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                value={descripcion}
                                onChange={onChange}
                            />

                            <label className='uppercase text-gray-600 block text-xl font-bold' >stock</label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                placeholder='stock'
                                className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                value={stock}
                                onChange={onChange}
                            />

                            <label className='uppercase text-gray-600 block text-xl font-bold' >precio</label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                placeholder='precio'
                                className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                value={precio}
                                onChange={onChange}
                            />

                            <label className='uppercase text-gray-600 block text-xl font-bold' >Imagen</label>
                            <input
                                type="text"
                                id="imagen"
                                name="imagen"
                                placeholder='Nombre'
                                className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                value={imagen}
                                onChange={onChange}
                            />

                            <button
                                type="submit"
                                value="Iniciar Sesión"
                                className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Actualizar Producto
                            </button>
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-green-500 before:mt-0.5 after:flex-1 after:border-t after:border-green-500 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <Link
                                to={"/admin"}
                                className="block text-center my-5 text-green-500 uppercase text-sm"
                            >Regresar</Link>

                        </form>
                    </div >
                </main>
            </div>
        </>
    );
}

export default ActualizarProductos;
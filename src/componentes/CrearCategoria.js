import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const CrearCategoria = () => {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nombre: '',
        imagen: ''
    })

    const { nombre, imagen } = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    const crearCategoria = async () => {
        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen
        }

        const response = await crud.POST(`/api/categoria`, data);
        const mensaje = response.msg;
        console.log(mensaje);
        const mensaje1 = "La Categoria fue creada correctamente";
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
        crearCategoria();
    }

    return (
        <>
            <Header />
            <div className='md:flex md:min-h-screen'>
            <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-black text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">
                            CREAR CATEGORIA
                        </h1>
                    </div>

                    <div className='mt-10 flex justify-center' >
                        <form
                            className='my-10 bg-white shadow rounded-lg p-10 '
                            onSubmit={onSubmit}
                        >
                            <div className='my-5'>
                                <label className='uppercase text-gray-600 block text-xl font-bold' >Nombre de la categoria</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder='Nombre'
                                    className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label className='uppercase text-gray-600 block text-xl font-bold' >Imagen de la categoria</label>
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    placeholder='Nombre'
                                    className='w-full mt-3 p-3 border rounded-lg bg-gray-50 border-green-300'
                                    value={imagen}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type="submit"
                                value="Crear Categoria"
                                className="bg-green-500 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                            />
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

export default CrearCategoria;
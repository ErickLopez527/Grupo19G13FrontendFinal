import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import crud from '../conexiones/crud';
import Header2 from './Header2';


const CrearCuenta = () => {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const crearCuenta = async () => {
    //los dos password deben ser iguales
    if (password !== confirmar) {
      console.log("son diferentes");
      const mensaje = "Las contraseñas son diferentes.";
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      })
    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }
      console.log(data);
      const response = await crud.POST(`/api/usuarios`, data);
      const mensaje = response.msg;
      if (mensaje === ' el usuario ya existe') {
        const mensaje = "el usuario ya existe.";
        swal({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        })
      } else {
        const mensaje = "El usuario fue creado correctamente.";
        swal({
          title: 'Informacion',
          text: mensaje,
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
        // funcion para limpiar cajas 
        setUsuario({
          nombre: '',
          email: '',
          password: '',
          confirmar: ''
        })
        //redireccionar a la pantalla login
        navigate("/login");
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  }

  return (

    <main>
      <Header2 />
      <section className="h-screen flex justify-center">
        <div className="container px-6 py-12 h-full ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1669833104/Mangoo_k8qetf.jpg"
                className="max-w-full h-auto rounded-full "
                alt=""
              />
            </div>

            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form className='my-10 bg-stone-300 shadow rounded-lg p-10'
                onSubmit={onSubmit} >
                <div className="mb-6">

                  <label className='uppercase text-gray-600 block text-xl font-bold' >Nombre</label>
                  <input
                    type="nombre"
                    id="nombre"
                    name="nombre"
                    placeholder='Ingrese su nombre'
                    className='w-full mt-3 p-3 border border-green-500 rounded-lg bg-gray-50'
                    value={nombre}
                    onChange={onChange}
                  />
                </div>


                <div className="mb-6">
                  <label className='uppercase text-gray-600 block text-xl font-bold' >Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email de Registro'
                    className='w-full mt-3 p-3 border border-green-500 rounded-lg bg-gray-50'
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  <label className='uppercase text-gray-600 block text-xl font-bold' >password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password de Registro'
                    className='w-full mt-3 p-3 border border-green-500 rounded-lg bg-gray-50'
                    value={password}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  <label className='uppercase text-gray-600 block text-xl font-bold' >confirmación </label>
                  <input
                    type="password"
                    id="confirmar"
                    name="confirmar"
                    placeholder='Confirme su Password'
                    className='w-full mt-3 p-3 border border-green-500 rounded-lg bg-gray-50'
                    value={confirmar}
                    onChange={onChange}
                  />
                </div>

                <button
                  type="submit"
                  value="Crear Cuenta"
                  className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  CREAR CUENTA
                </button>



                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-green-500 before:mt-0.5 after:flex-1 after:border-t after:border-green-500 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <Link
                  to={"/"}
                  className="block text-center my-5 text-green-500 uppercase text-sm"
                >Regresar</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CrearCuenta;
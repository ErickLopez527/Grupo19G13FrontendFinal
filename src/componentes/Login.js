import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import crud from '../conexiones/crud';
import swal from 'sweetalert';
import Header2 from './Header2';

const Login = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const autenticarUsuario = async () => {
    const data = {
      email: usuario.email,
      password: usuario.password
    }
    console.log(data);
    const response = await crud.POST(`/api/auth`, data);
    const mensaje = response.msg;
    console.log(mensaje);
    if (mensaje === ' el usuario no existe') {
      const mensaje = "el usuario no existe.";
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
    } else if (mensaje === 'password incorrecto') {
      const mensaje = "password incorrecto";
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
      const jwt = response.token;
      localStorage.setItem('token', jwt);
      //redireccionar a la pantalla Administrador
      navigate("/admin");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    autenticarUsuario();
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
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email de Registro'
                    className='w-full mt-3 p-3 border border-green-300 rounded-lg bg-gray-50'
                    value={email}
                    onChange={onChange}
                  />
                </div>


                <div className="mb-6">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password de Registro'
                    className='w-full mt-3 p-3 border border-green-300 rounded-lg bg-gray-50'
                    value={password}
                    onChange={onChange}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                    >Recordarme</label
                    >
                  </div>
                  <a
                    href="#!"
                    className="text-black hover:text-green-500 focus:text-green-500 active:text-green-500 duration-200 transition ease-in-out"
                  >Olvidaste tu password?</a
                  >
                </div>


                <button
                  type="submit"
                  value="Iniciar Sesión"
                  className="inline-block px-7 py-3 bg-green-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-green-500 before:mt-0.5 after:flex-1 after:border-t after:border-green-500 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <Link
                  to={"/crear-cuenta"}
                  className="block text-center my-5 text-green-500 uppercase text-sm"
                >Crear Cuenta</Link>
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

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';


const Header2 = () => {

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img
                        className="inline-block h-12 w-12 rounded-full ring-2 ring-green-400"
                        src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1669833104/Mangoo_k8qetf.jpg"
                        alt=""
                    />
                    <span className="ml-3 text-xl">Mangoo Ecommerce</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-green-400	flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-white">Home</Link>
                    <Link to={"/eventosdelmes"} className="mr-5 hover:text-white">Eventos del mes</Link>
                    <Link to={"/lanzamientos"} className="mr-5 hover:text-white">Nuevos lanzamientos</Link>
                    <Link to={"/categorias"} className="mr-5 hover:text-white">Categorias</Link>
                    <Link to={"/contacto"} className="mr-5 hover:text-white">Contactenos</Link>
                </nav>
                <div>
                    <Link
                        to={"/login"}
                        className="block text-center my-5 text-green-400 uppercase text-sm"
                    >iniciar sesion</Link>
                    <Link
                        to={"/crear-cuenta"}
                        className="block text-center my-5 text-green-400 uppercase text-sm"
                    >crear cuenta </Link>
                </div>
            </div>
        </header>

    );
}

export default Header2;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    
    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate("/");
    }

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img
                        className="inline-block h-12 w-12 rounded-full ring-2 ring-green-400"
                        src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1669833104/Mangoo_k8qetf.jpg"
                        alt=""
                    />
                    <span className="ml-3 text-xl">ADMINISTRADOR</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-green-400	flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-white">Home</Link>
                    <Link to={"/admin"} className="mr-5 hover:text-white">Admin Categorias</Link>
                    <Link to={"/crear-categorias"} className="mr-5 hover:text-white">Crear Categorias</Link>
                    <Link to={"/contacto"} className="mr-5 hover:text-white">Contactenos</Link>
                </nav>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <input
                        type="submit"
                        value="cerrar Sesión"
                        className="bg-green-400 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                        onClick={cerrarSesion}
                    />
                </div>
            </div>
        </header>

    );
}

export default Header;
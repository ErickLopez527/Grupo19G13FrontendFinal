import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export const ViewProductos = ({ producto }) => {

    const { nombre, descripcion, stock, precio, imagen } = producto;

    
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
                    //cargarProducto();
                } else {
                    swal("se cancelo la acción");
                }
            });
    }

    return (
        <div
            className='border-r p-5 flex justify-between items-center'
        >
            <div className='flex flex-col items-start'>
                <p className='mb-1 text-xl text-gray-50'>nombre:  {nombre}</p>
                <p className='mb-1 text-xl text-gray-50 uppercase'>descripción:  {descripcion}</p>
                <p className='mb-1 text-xl text-gray-50'>stock:  {stock}</p>
                <p className='mb-1 text-xl text-gray-50'>precio:  {precio}</p>
                <img src={imagen} width="150" height="150" alt=''></img>
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>

                <Link
                    to={`/actualizar-producto/${producto._id}`}
                >Editar</Link>&nbsp;&nbsp;
               
                <button
                    className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={() => borrarProducto(producto._id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default ViewProductos
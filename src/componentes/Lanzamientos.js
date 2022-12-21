import React from 'react'
import Header2 from './Header2';
import ReactPlayer from 'react-player';


const Lanzamientos = () => {



    return (

        <main>
            <Header2 />

            <div class="  px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-1/2 p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/88HP1EC6U_s'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/mJRnEYuc26Y'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/RkC0l4iekYo'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/icfdB8PQHKA'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/f5uik5fgIaI'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <ReactPlayer
                                url='https://youtu.be/0tUqIHwHDEc'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-black text-gray-900 md:text-5xl lg:text-6xl dark:text-green-400">
                    Funcionalidad Proyecto ==
                </h1>
                
            </div>
            <div className="flex-1 items-start ">
                    <ReactPlayer
                        url='https://youtu.be/RLAJ3he0Kv8'
                        width='100%'
                        height='100%'
                    />
                </div>
        </main>
    );
}

export default Lanzamientos;
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {


    return (
        <aside className='md:w-60 lg:w-98 px-5 py-10 bg-gray-900'>
            <div className='py-10'>
            <img
                src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1669833104/Mangoo1_h2xtnv.jpg"
                className="max-w-full h-auto rounded-full "
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1671549794/200w_mkiqdd.gif"
                className="max-w-full h-auto rounded-full "
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dqsb2do9p/image/upload/v1671549987/201w_cpullj.gif"
                className="max-w-full h-auto rounded-full "
                alt=""
              />
            </div>
        </aside>
    );
}

export default Sidebar;
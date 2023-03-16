import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import Navbar from '../Componets/Navbar/Navbar';
import { eSocityContext } from '../ContextProvider/ContextProvider';

const Main = () => {
    const { darkOn } = useContext(eSocityContext);
    return (
        <div className={`min-h-screen flex flex-col justify-between relative ${darkOn ? "dark:bg-[#03001C] dark:text-black" : 'bg-[#ebe8e8]'}`}>

            <Navbar />
            <div className='lg:pt-20 md:pt-16 pt-16'>
                <Outlet />
            </div>
            <div className='absolute w-full bottom-1 left-0 lg:hidden block'>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
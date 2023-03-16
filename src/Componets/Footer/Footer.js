import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiMessage2Line } from 'react-icons/ri';
import { BsBookmarkCheck } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { VscGear } from 'react-icons/vsc';
import { FiLogIn } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Footer.css';
import { eSocityContext } from '../../ContextProvider/ContextProvider';

const Footer = () => {
    const { setDarkOn, darkOn } = useContext(eSocityContext);
    return (
        <div className='flex justify-center items-center md:w-[45%] w-[95%] mx-auto phone-menu'>
            <ul className='flex'>
                <li>
                    <Link><AiOutlineHome /></Link>
                </li>
                <li>
                    <Link><MdOutlineExplore /></Link>
                </li>
                <li>
                    <Link><IoNotificationsOutline /></Link>
                </li>
                <li>
                    <Link><RiMessage2Line /></Link>
                </li>
                <li>
                    <Link><BsBookmarkCheck /></Link>
                </li>
                <li>
                    <Link><TbDeviceAnalytics /></Link>
                </li>
                <li>
                    <Link><VscGear /></Link>
                </li>
                <li>
                    <button onClick={() => setDarkOn(!darkOn)} className='md:hidden block'>
                        {
                            darkOn ?
                                <span className='flex items-center font-semibold text-white'><MdOutlineDarkMode /></span>
                                :
                                <span className='flex items-center font-semibold'><MdDarkMode /> </span>
                        }
                    </button>
                </li>
                <li>
                    <button className='text-white font-semibold'><FiLogIn /></button>
                </li>

            </ul>
        </div>
    );
};

export default Footer;
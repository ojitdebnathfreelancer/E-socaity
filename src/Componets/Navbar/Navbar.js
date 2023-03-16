import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { eSocityContext } from '../../ContextProvider/ContextProvider';

const Navbar = () => {
    const { setDarkOn, darkOn } = useContext(eSocityContext);
    return (
        <div className={`main-navbar fixed w-full z-[99999] ${darkOn ? 'dark-navbar' : ''}`}>
            <div className='navbar-container max-w-7xl mx-auto flex justify-between items-center lg:px-0 px-1'>
                <span className='font-bold lg:text-2xl text-xl'>
                    <Link to='/'><span className='text-[#8e2de2]'>E-</span><span className='text-[#4a00e0]'>Socaity</span></Link>
                </span>
                <div className={`search lg:block md:block hidden ${darkOn ? 'border-[1px] border-white text-white' : 'bg-[#ebe8e8]'}`}>
                    <div className='flex items-center'>
                        <BsSearch />
                        <input className='ml-3' type="search" />
                    </div>
                </div>
                <div className='flex items-center'>
                    <button onClick={() => setDarkOn(!darkOn)} className='mr-3 lg:block md:block hidden'>
                        {
                            darkOn ?
                                <span className='flex items-center font-semibold text-white'><MdOutlineDarkMode size={35} /> Light</span>
                                :
                                <span className='flex items-center font-semibold'><MdDarkMode size={35} /> Dark</span>
                        }
                    </button>
                    <label htmlFor='my-modal-3' className='normal-bg lg:px-5 px-3 py-2 rounded-full text-white font-semibold lg:mr-5 h-[40px] mr-3 cursor-pointer'>Create</label>

                    <button className='nav-profile-btn'>
                        <img src="https://www.mckinsey.com/~/media/mckinsey/our%20people/sara%20prince/sara-prince_profile2_1536x1152.jpg?mw=488&car=1:1" alt="profile" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
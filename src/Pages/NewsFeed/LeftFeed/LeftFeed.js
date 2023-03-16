import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiMessage2Line } from 'react-icons/ri';
import { BsBookmarkCheck } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { VscGear } from 'react-icons/vsc';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { eSocityContext } from '../../../ContextProvider/ContextProvider';

const LeftFeed = () => {
    const activeClass = "normal-text";
    const { darkOn } = useContext(eSocityContext);
    return (
        <ul className={`profile-menu p-2 rounded-xl text-[18px] ${darkOn ? 'bg-[##03001C] text-white border-[1px] border-white' : 'bg-white'}`}>
            <li>
                <Link className='profile flex items-center'>
                    <div className='profile-img'>
                        <img src="https://www.mckinsey.com/~/media/mckinsey/our%20people/sara%20prince/sara-prince_profile2_1536x1152.jpg?mw=488&car=1:1" alt="profile" />
                    </div>
                    <div className='flex flex-col text-[14px] ml-2'>
                        <span className='font-bold'>Sara Prince</span>
                        <span>User Name</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link className={`${activeClass}`}>
                    <AiOutlineHome />
                    <span className='ml-2'>Home</span>
                </Link>
            </li>
            <li >
                <Link>
                    <MdOutlineExplore />
                    <span className='ml-2'>Explor</span>
                </Link>
            </li>
            <li >
                <Link>
                    <IoNotificationsOutline />
                    <span className='ml-2'>Notifications</span>
                </Link>
            </li>
            <li >
                <Link>
                    <RiMessage2Line />
                    <span className='ml-2'>Message</span>
                </Link>
            </li>
            <li >
                <Link>
                    <BsBookmarkCheck />
                    <span className='ml-2'>Bookmarks</span>
                </Link>
            </li>
            <li >
                <Link>
                    <TbDeviceAnalytics />
                    <span className='ml-2'>Analitycs</span>
                </Link>
            </li>
            <li >
                <Link>
                    <VscGear />
                    <span className='ml-2'>Seitting</span>
                </Link>
            </li>
            <li className='font-semibold'>
                <button className='flex items-center'>
                    <FiLogIn size={18} />
                    <span className='ml-2'>Logout</span>
                </button>
            </li>
            <label htmlFor='my-modal-3' className='normal-bg w-full lg:px-5 px-3 py-2 rounded-full text-white font-semibold lg:mr-5 h-[40px] mt-[20px] mr-3 block text-center cursor-pointer'>
                Create Post
            </label>
        </ul>
    );
};

export default LeftFeed;
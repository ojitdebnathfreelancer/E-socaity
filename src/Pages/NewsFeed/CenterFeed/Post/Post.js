import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { eSocityContext } from '../../../../ContextProvider/ContextProvider';

const Post = () => {
    const { darkOn } = useContext(eSocityContext);
    return (
        <div className={`flex items-center px-3 py-2 rounded-[20px] ${darkOn ? 'bg-[#03001C] border-[1px] border-white' : 'bg-white'}`}>
            <div className='h-[35px] w-[35px] rounded-[50%] overflow-hidden mr-3'>
                <Link>
                    <img className='h-[100%] w-[100%] object-cover' src='https://i.pinimg.com/736x/d5/a4/01/d5a4019042a4f9e6517df77489ff8a74.jpg' alt='user-img' />
                </Link>
            </div>
            <label htmlFor="my-modal-3" className="post-container flex justify-between items-center cursor-pointer w-full h-full">
                <p className={`${darkOn? 'text-white' : ''}`}>What's your mind, <span className='font-semibold'>ojit?</span></p>
                <span className='normal-bg text-white px-4 py-1 rounded-[20px] font-semibold'>Post</span>
            </label>
        </div>
    );
};

export default Post;
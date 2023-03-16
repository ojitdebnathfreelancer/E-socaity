import React from 'react';
import { Link } from 'react-router-dom';

const Stotry = () => {
    return (
        <div className='story-item relative mx-1'>
            <img src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg" alt="user-img" />
            <div className='user-profile-pic absolute top-[10px] left-[10px] h-[35px] w-[34px] bg-orange-400 rounded-[50%] border border-[#4a00e0]'>
                <Link>
                    <img src='https://i.pinimg.com/736x/d5/a4/01/d5a4019042a4f9e6517df77489ff8a74.jpg' alt='user-img' />
                </Link>
            </div>
        </div>
    );
};

export default Stotry;
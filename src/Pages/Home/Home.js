import React from 'react';
import banner from '../../Assets/banner.png';
import Login from './Login/Login';

const Home = () => {
    return (
        <div className='normal-bg px-5 lg:py-0 py-5'>
            <div className='min-h-screen max-w-7xl mx-auto flex justify-center items-center'>
                <div className='flex lg:flex-row flex-col-reverse lg:gap-x-10'>
                    <div className='lg:w-[50%]'>
                        <Login />
                    </div>
                    <div className='lg:w-[50%] flex justify-center items-center lg:mb-0 mb-3'>
                        <img className='' src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
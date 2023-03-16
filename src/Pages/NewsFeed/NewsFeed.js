import React from 'react';
import CenterFeed from './CenterFeed/CenterFeed';
import LeftFeed from './LeftFeed/LeftFeed';
import './NewsFeed.css';
import RightFeed from './RightFeed/RightFeed';

const NewsFeed = () => {
    return (
        <div className='max-w-7xl mx-auto mt-4 grid grid-cols-12 gap-6 lg:px-0 md:px-5 px-2'>
            <div className='lg:col-span-2 lg:block hidden rounded-xl p-2'>
                <LeftFeed />
            </div>
            <div className='lg:col-span-7 md:col-span-7 col-span-12 center-feed'>
                <CenterFeed />
            </div>
            <div className='lg:col-span-3 md:col-span-5 lg:block md:block hidden right-feed'>
                <RightFeed />
            </div>
        </div>
    );
};

export default NewsFeed;
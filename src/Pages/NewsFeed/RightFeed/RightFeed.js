import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { eSocityContext } from '../../../ContextProvider/ContextProvider';
import FriendRequest from './FriendRequest/FriendRequest';
import SuggestionsFriend from './SuggestionsFriend/SuggestionsFriend';

const RightFeed = () => {
    const { darkOn } = useContext(eSocityContext);

    return (
        <div className={`rounded-xl p-2 right-feed-compo lg:pb-0 pb-10 lg:h-[87vh] h-[84vh] ${darkOn ? 'bg-[#03001C] text-white' : 'bg-white'}`}>
            <div>
                <p className='flex justify-between items-center'>
                    <span className='font-semibold'>Friend Request </span>
                    <Link className='text-[#4a00e0] font-semibold'>See All</Link>
                </p>
                <div className='friend-request-container'>
                    <FriendRequest />
                    <FriendRequest />
                    <FriendRequest />
                    <FriendRequest />
                </div>
            </div>
            {/* frind request part of right feed */}

            <div className='mt-5'>
                <p className='flex justify-between items-center'>
                    <span className='font-semibold'>Suggestions</span>
                    <Link className='text-[#4a00e0] font-semibold'>See All</Link>
                </p>
                <div className='suggestions-friend-container'>
                    <SuggestionsFriend />
                    <SuggestionsFriend />
                    <SuggestionsFriend />
                </div>
            </div>
            {/* Suggestions frind part of right feed  */}
        </div>
    );
};

export default RightFeed;
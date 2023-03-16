import React from 'react';

const SuggestionsFriend = () => {
    return (
        <div className='user-req-itme'>
            <div className='flex items-center'>
                <div className='user-img'>
                    <img src="https://www.mckinsey.com/~/media/mckinsey/our%20people/sara%20prince/sara-prince_profile2_1536x1152.jpg?mw=488&car=1:1" alt="user-img" />
                </div>
                <p className='flex flex-col text-[14px] ml-2'><span className='font-semibold'>Ojit Deb Nath</span> </p>
            </div>
            <div className='btn-group flex justify-between items-center mt-2'>
                <button className='accept'>Add Friend</button>
            </div>
        </div>
    );
};

export default SuggestionsFriend;
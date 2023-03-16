import React, { useState } from 'react';
import './PostModal.css';
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { postPhoto, postPhotoRemove, postText, postTextRemove } from '../../Redux/slice/PostSlice';

const PostModal = () => {
    const dispatch = useDispatch();
    const { photo } = useSelector(state => state.post);
    const userPost = useSelector(state => state.post);
    const [onlinePhoto, setOnlinePhonto] = useState('');

    const removePhoto = () => {
        dispatch(postPhotoRemove())
    };
    // remove photo from upload 

    const removeText = () => {
        dispatch(postTextRemove())
    };
    // remove text from upload


    const handelPost = (e) => {
        e.preventDefault();
        const form = e.target;
        if (photo) {
            const postImg = new FormData();
            postImg.append('image', photo);

            fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
                {
                    method: "POST",
                    body: postImg,
                })
                .then(res => res.json())
                .then(data => {
                    setOnlinePhonto(data.data.url);
                    removePhoto();
                    removeText();
                    form.reset();
                    console.log({ ...userPost, photo: onlinePhoto });
                })
        }
    };
    // submit user post to DB

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={e => handelPost(e)}>
                        {
                            photo ?
                                <>
                                    <button className='font-semibold' onClick={() => removePhoto()}>Remove</button>
                                    <div className='img-preview lg:h-[300px] md:h-[200px] h-[200px]'>
                                        <img src={URL.createObjectURL(photo)} alt='post-img' />
                                    </div>
                                </>
                                :
                                <div className='upload-img'>
                                    <div className="rounded-lg">
                                        <label htmlFor="file">
                                            <div className="w-full cursor-pointer flex justify-center items-center flex-col p-3">
                                                <FiUploadCloud className="text-3xl inline-block text-center text-[#a624d1]" />
                                                <p className="text-gray-800">Add Photos</p>
                                            </div>
                                            <input
                                                onChange={(e) => dispatch(postPhoto(e.target.files[0]))}
                                                type="file"
                                                name="file"
                                                id="file"
                                                accept=".png,.jpg,.jpeg"
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                </div>
                        }
                        <div className='text'>
                            <textarea onChange={(e) => dispatch(postText(e.target.value))} placeholder='Write your text'></textarea>
                        </div>
                        <button className='normal-bg text-white px-3 py-1 rounded-lg' type='submit'>Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
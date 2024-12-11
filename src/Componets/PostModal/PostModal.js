import React, { useState } from "react";
import "./PostModal.css";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { postPhoto, postText } from "../../Redux/slice/PostSlice";
import { toast } from "react-toastify";

const PostModal = () => {
  const dispatch = useDispatch();
  const userPost = useSelector((state) => state.post);
  const [onlinePhoto, setOnlinePhonto] = useState("");

  const removePhoto = () => {
    setOnlinePhonto("");
  };
  // remove photo from upload

  const handelPost = (e) => {
    e.preventDefault();
    const form = e.target;
    if (onlinePhoto) {
      const postImg = new FormData();
      postImg.append("image", onlinePhoto);

      fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
        {
          method: "POST",
          body: postImg,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(postPhoto(data.data.url));
          postByData({ ...userPost, photo: data.data.url });
          setOnlinePhonto("");
          form.reset();
        });
    }
  };
  // submit user post to DB

  const postByData = async (postData) => {
    console.log(postData);
    const res = await fetch("http://localhost:5000/api/v1/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const result = await res.json();
    toast.success(result?.message);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={(e) => handelPost(e)}>
            {onlinePhoto ? (
              <>
                <button className="font-semibold" onClick={() => removePhoto()}>
                  Remove
                </button>
                <div className="img-preview lg:h-[300px] md:h-[200px] h-[200px]">
                  <img src={URL.createObjectURL(onlinePhoto)} alt="post-img" />
                </div>
              </>
            ) : (
              <div className="upload-img">
                <div className="rounded-lg">
                  <label htmlFor="file">
                    <div className="w-full cursor-pointer flex justify-center items-center flex-col p-3">
                      <FiUploadCloud className="text-3xl inline-block text-center text-[#a624d1]" />
                      <p className="text-gray-800">Add Photos</p>
                    </div>
                    <input
                      onChange={(e) => setOnlinePhonto(e.target.files[0])}
                      type="file"
                      name="file"
                      id="file"
                      accept=".png,.jpg,.jpeg"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            )}
            <div className="text">
              <textarea
                onChange={(e) => dispatch(postText(e.target.value))}
                placeholder="Write your text"
              ></textarea>
            </div>
            <button
              className="normal-bg text-white px-3 py-1 rounded-lg"
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { eSocityContext } from "../../../../../ContextProvider/ContextProvider";
import Reaction from "../Reaction/Reaction";
import Comments from "../Comments/Comments";

const Posted = ({ post }) => {
  const [dotMenu, setDotMenu] = useState(false);
  const { darkOn } = useContext(eSocityContext);

  return (
    <div
      className={`mt-5 rounded-xl ${darkOn ? "bg-[#03001C] text-white" : ""}`}
    >
      <div
        className={`p-3 rounded-xl ${
          darkOn ? "border-[0.2px] border-white" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="profile flex items-center">
            <Link className="profile-img w-[40px] h-[40px] rounded-[50%] overflow-hidden">
              <img
                src="https://www.mckinsey.com/~/media/mckinsey/our%20people/sara%20prince/sara-prince_profile2_1536x1152.jpg?mw=488&car=1:1"
                alt="profile"
              />
            </Link>
            <div className="flex flex-col text-[13px] ml-2">
              <span className="font-bold">Sara Prince</span>
              <span>20 minutes ago</span>
            </div>
          </div>
          <span className="relative">
            <BsThreeDots
              onClick={() => setDotMenu(!dotMenu)}
              size={22}
              className="cursor-pointer"
            />
            <ul
              className={`rounded-md px-2 py-1 absolute right-[0%] top-[120%] font-semibold ${
                darkOn ? "bg-[#03001C]" : "bg-[#ebe8e8]"
              } ${dotMenu ? "block" : "hidden"}`}
            >
              <li>
                <button>Edit</button>
              </li>
              <li>
                <button>Delete</button>
              </li>
              <li>
                <button>Pervicey</button>
              </li>
            </ul>
          </span>
        </div>
        {/* user info and delete button  */}
        <div>
          {post?.img && (
            <img
              className="mt-2 max-h-[400px] w-[100%] object-cover"
              src={post?.img}
              alt="post-img"
            />
          )}
          {post?.text && (
            <p
              className={`mt-2 lg:text-[16px] md:text-[14px] text-[13px] text-justify first-letter:uppercase ${
                darkOn ? "text-white" : "text-black"
              }`}
            >
              {post?.text}
            </p>
          )}
        </div>
        {/* content  */}
      </div>
      <Reaction />
      <Comments />
    </div>
  );
};

export default Posted;

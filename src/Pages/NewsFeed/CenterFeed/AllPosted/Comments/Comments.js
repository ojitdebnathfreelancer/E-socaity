import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { eSocityContext } from "../../../../../ContextProvider/ContextProvider";

const Comments = () => {
  const { darkOn } = useContext(eSocityContext);

  return (
    <div className="my-2 px-3">
      <div className="profile flex">
        <Link className="profile-img overflow-hidden">
          <img
            className="lg:w-[40px] md:w-[55px] md:h-[40px] w-[60px] h-[30px] rounded-[50%]"
            src="https://www.mckinsey.com/~/media/mckinsey/our%20people/sara%20prince/sara-prince_profile2_1536x1152.jpg?mw=488&car=1:1"
            alt="profile"
          />
        </Link>
        <div className="flex flex-col text-[13px] ml-2">
          <span className="font-bold text-[13px]">Sara Prince</span>
          <p>
            What is a basic definition of text? Text is the exact, original
            words written by an author.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

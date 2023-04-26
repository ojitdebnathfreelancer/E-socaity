import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

const Reaction = () => {
  return (
    <div className="mt-3 flex justify-around items-center">

      {/* <div className="flex items-center">
        <button>
          <AiFillHeart className="md:h-[25px] md:w-[25px] mr-2 text-red-500" />
        </button>
        <span>30</span>
      </div> */}

      <div className="flex items-center">
        <button>
          <AiOutlineHeart className="md:h-[25px] md:w-[25px] mr-2" />
        </button>
        <span>30</span>
      </div>

      <div className="flex items-center">
        <button>
          <FaRegCommentAlt className="md:h-[25px] md:w-[25px] mr-2" />
        </button>
        <span>20</span>
      </div>
    </div>
  );
};

export default Reaction;

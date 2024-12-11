import React, { useEffect, useState } from "react";
import Posted from "./Posted/Posted";

const AllPosted = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/post")
      .then((res) => res.json())
      .then((data) => setFeedPosts(data?.data));
  }, []);
  return (
    <>
      {feedPosts.map((post) => (
        <Posted key={post?._id} post={post} />
      ))}
    </>
  );
};

export default AllPosted;

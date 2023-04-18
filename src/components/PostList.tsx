import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Post from "./Post";

const PostList: React.FC = () => {
  const { state } = useContext(BlogContext);

  return (
    <div>
      <h1>My Blog</h1>
      {state.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

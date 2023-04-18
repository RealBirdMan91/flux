import React, { useContext } from "react";
import { BlogActionType, Post as PostType } from "../types/BlogTypes";
import { BlogContext } from "../context/BlogContext";
import { editPost, deletePost } from "../api/BlogApi";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { dispatch } = useContext(BlogContext);

  const handleEdit = async () => {
    const newTitle = prompt("New title:", post.title);
    const newContent = prompt("New content:", post.content);

    if (newTitle && newContent) {
      const updatedPost = { ...post, title: newTitle, content: newContent };
      await editPost(updatedPost);
      dispatch({
        type: BlogActionType.EDIT_POST,
        payload: updatedPost,
      });
    }
  };

  const handleDelete = async () => {
    await deletePost(post.id);
    dispatch({ type: BlogActionType.DELETE_POST, payload: post.id });
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;

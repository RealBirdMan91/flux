import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { BlogActionType, Post } from "../types/BlogTypes";
import { addPost } from "../api/BlogApi";
import { useNavigate } from "react-router-dom";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { dispatch } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) return;

    const newPost: Omit<Post, "id"> = {
      title,
      content,
    };

    const createdPost = await addPost(newPost);
    dispatch({ type: BlogActionType.ADD_POST, payload: createdPost });
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;

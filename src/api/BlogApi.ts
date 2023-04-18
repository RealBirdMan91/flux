import axios from "axios";
import { Post } from "../types/BlogTypes";

const API_BASE_URL = "http://localhost:5000";

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
  return response.data;
};

export const addPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const response = await axios.post<Post>(`${API_BASE_URL}/posts`, post);
  return response.data;
};

export const editPost = async (post: Post): Promise<Post> => {
  const response = await axios.put<Post>(
    `${API_BASE_URL}/posts/${post.id}`,
    post
  );
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/posts/${id}`);
};

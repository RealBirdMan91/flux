import { createContext } from "react";
import { BlogState, BlogAction } from "../types/BlogTypes";

export interface BlogContextProps {
  state: BlogState;
  dispatch: React.Dispatch<BlogAction>;
}

export const BlogContext = createContext<BlogContextProps>({
  state: { posts: [] },
  dispatch: () => {},
});

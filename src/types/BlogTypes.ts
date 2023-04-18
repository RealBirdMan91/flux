export interface Post {
  id: number;
  title: string;
  content: string;
}

export enum BlogActionType {
  SET_POSTS = "SET_POSTS",
  ADD_POST = "ADD_POST",
  EDIT_POST = "EDIT_POST",
  DELETE_POST = "DELETE_POST",
}

export type BlogAction =
  | { type: BlogActionType.SET_POSTS; payload: Post[] }
  | { type: BlogActionType.ADD_POST; payload: Post }
  | { type: BlogActionType.EDIT_POST; payload: Post }
  | { type: BlogActionType.DELETE_POST; payload: Post["id"] };

export interface BlogState {
  posts: Post[];
}

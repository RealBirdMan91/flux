import { BlogState, BlogAction, BlogActionType } from "../types/BlogTypes";

export const BlogReducer = (
  state: BlogState,
  action: BlogAction
): BlogState => {
  switch (action.type) {
    case BlogActionType.SET_POSTS:
      return { ...state, posts: action.payload };
    case BlogActionType.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case BlogActionType.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case BlogActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

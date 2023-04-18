import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { BlogContext, BlogContextProps } from "./context/BlogContext";
import { BlogReducer } from "./context/BlogReducer";
import { BlogState, BlogAction } from "./types/BlogTypes";
import { BlogActionType } from "./types/BlogTypes";
import { getPosts } from "./api/BlogApi";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";

const initialState: BlogState = {
  posts: [],
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer<React.Reducer<BlogState, BlogAction>>(
    BlogReducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      const posts = await getPosts();
      dispatch({ type: BlogActionType.SET_POSTS, payload: posts });
    })();
  }, []);

  const contextValue: BlogContextProps = {
    state,
    dispatch,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default App;

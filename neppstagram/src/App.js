import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import Auth from "./components/pages/Auth";
import Public from "./components/pages/Public";
import SignUpForm from "./components/auth/SignUpForm";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import PostDetail from "./components/post/PostDetail";
import EditPost from "./components/post/EditPost";
import PostList from "./components/post/PostList";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>
      <Route path="/" element={<Public />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
          <Route path="edit" element={<EditPost />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
export default App;

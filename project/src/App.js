import "./App.css";
import Public from "./pages/Public";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Auth from "./pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Public />}>
          <Route path="" element={<Home />}></Route>
          <Route path="mypage" element={<MyPage />}></Route>
        </Route>

        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="signup" element={<SignupForm />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import Auth from './components/pages/Auth';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';

function App() {
  return <Routes>
    <Route path='auth' element={<Auth/>}>
      <Route path = 'login' element={<LoginForm/>}></Route>
      <Route path = 'signup' element={<SignUpForm/>}></Route>
      </Route>

  </Routes>
}
export default App;

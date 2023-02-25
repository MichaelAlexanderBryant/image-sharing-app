import NavBar from './components/NavBar';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'
import SignUp from './pages/SignUp';

function App() {

  return (
    <div>
      <AuthProvider>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<HomePage/>}/>
              </Route>
            <Route path="/login" exact element={<LogIn/>}/>
            <Route path="/signup" exact element={<SignUp/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

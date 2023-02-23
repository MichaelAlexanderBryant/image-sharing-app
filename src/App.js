import NavBar from './components/NavBar';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/login" exact element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;

import NavBar from './components/NavBar';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import PrivateRouteSignUp from './utils/PrivateRouteSignUp';
import { AuthProvider } from './context/AuthContext'
import SignUp from './pages/SignUp';
import PrivateRouteHomePage from './utils/PrivateRouteHomePage';
import PrivateRouteLogIn from './utils/PrivateRouteLogIn';
import PrivateRouteNewPost from './utils/PrivateRouteNewPost';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import UserPostList from './pages/UserPostList';
import UserPostDetail from './pages/UserPostDetail';
import PrivateRoutePostDetail from './utils/PrivateRoutePostDetail';
import PrivateRouteYourPosts from './utils/PrivateRouteYourPosts';
import PrivateRouteYourPostDetail from './utils/PrivateRouteYourPostDetail';

function App() {

  return (
    <div>
      <AuthProvider>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<PrivateRouteHomePage/>}>
                <Route exact path='/' element={<HomePage/>}/>
            </Route>
            <Route exact path='/login' element={<PrivateRouteLogIn/>}>
              <Route path="/login" exact element={<LogIn/>}/>
            </Route>
            <Route exact path='/signup' element={<PrivateRouteSignUp/>}>
              <Route path="/signup" exact element={<SignUp/>}/>
            </Route>
            <Route exact path='/newpost' element={<PrivateRouteNewPost/>}>
              <Route path="/newpost" exact element={<NewPost />}/>
            </Route>
            <Route exact path='/postdetail/:id' element={<PrivateRoutePostDetail />}>
              <Route path="/postdetail/:id" element={<PostDetail />} />
            </Route>
            <Route exact path='/yourposts' element={<PrivateRouteYourPosts/>}>
              <Route path="/yourposts" element={<UserPostList />} />
            </Route>
            <Route exact path='/yourposts/:id' element={<PrivateRouteYourPostDetail />}>
              <Route path="/yourposts/:id" element={<UserPostDetail />} />
            </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

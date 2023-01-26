import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {AuthContext, FirebaseContext} from './store/Context'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'





function App() {
  const {user,setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
    <Post>  
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/sell' element={<Create/>}/>
        <Route exact path='/product' element={<View/>}/>
        </Routes>
      </Router>
    </Post>
    </div>

  );
}

export default App;

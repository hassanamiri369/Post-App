import React , {useContext , useState} from 'react';
import {Routes , Route , Link} from "react-router-dom"

import { PostContext } from './context/postContext';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Headr/Header';
import About from './Pages/About/About';
import AddPost from './Pages/AddPost/AddPost';
import EditPost from './Pages/EditPost/EditPost';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PostDetail from './Pages/PostDetail/PostDetail';
import PostsList from './Pages/Posts/PostsList';


function App() {

  
  const context = useContext(PostContext)
  // console.log(context)

  


  return (
    <div className="App">
  
      
      {/* header */}
      <div className='header'>
      <Header/>
      </div>

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/post" >
            <Route index element={<PostsList/>}/>
            <Route path='/post/:id' element={<PostDetail/>}/>
          </Route>

          <Route path='/addPost' element={<AddPost/>}/>
          <Route path='/edit' element={<EditPost/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<NotFound/>} />

        </Routes>
      </div>


      {/* footer */}
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;

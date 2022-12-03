import React , {useContext , useState} from 'react';
import {Routes , Route , Link} from "react-router-dom"

import { PostContext } from './context/postContext';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Headr/Header';
import AddPost from './Pages/AddPost/AddPost';
import PostsList from './Pages/Posts/PostsList';


function App() {

  
  const context = useContext(PostContext)
  console.log(context)

  


  return (
    <div className="App">
  
      
      {/* header */}
      <div className='header'>
      <Header/>
      </div>

      <div className='main'>
        <Routes>
          <Route path="/" >
            <Route index element={<PostsList/>}/>
          </Route>

          <Route path='/addPost' element={<AddPost/>}/>
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

import React, { useContext } from 'react'
import { PostContext } from '../../context/postContext'

import { Outlet, Link, useNavigate } from 'react-router-dom'


// style
import "./Style.css"

const PostsList = () => {

  const context = useContext(PostContext)
  const { state } = context;
  console.log(state.posts)
  const navigate = useNavigate()

  return (
    <div className='post-container'>

      {state.posts.length === 0 && <h2>no any post !!</h2>}
      {state.posts.map((item, index) =>
       <div className='content-post' key={item.id}>
        {/* <div>Post : {index}</div> */}
        <div className='item'>
          <h1 className='title-item'>{item.title}</h1>
          <div className='category-item'>{item.category}</div>
          <div className='description-item'>{item.description}</div>
        </div>
        <button onClick={() => navigate(`${item.id}`)}>more</button>
      </div>)}

      <Outlet />
    </div>
  )
}

export default PostsList
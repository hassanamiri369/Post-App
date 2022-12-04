import React , {useContext} from 'react'
import { PostContext } from '../../context/postContext'

import { Outlet , Link} from 'react-router-dom'


// style
import "./Style.css"

const PostsList = () => {

  const context = useContext(PostContext)
  const {state} = context;
  
  return (
    <div className='post-container'>
        <h1>Post List</h1>
        <div className='post'>
          {state.posts.length ===  0 && <h2>no any post !!</h2>}
          {state.posts.map((item , index) => <div className='content-post' key={item.id}>
            <div>Post : {index}</div>
            <div className='title-category'><h2>{item.title}</h2><span>{item.category}</span></div>
            <p className='description'>{item.description}</p>
            <p><Link to={`${item.id}`}>more</Link></p>
          </div>)}
        </div>
        <Outlet/>
    </div>
  )
}

export default PostsList
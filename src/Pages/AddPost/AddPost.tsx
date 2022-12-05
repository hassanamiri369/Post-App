import React , {useState , useContext } from 'react'
// import { AddNewPost } from '../../api/api'
import {useNavigate} from "react-router-dom"
import { IPost, PostContext } from '../../context/postContext'

// style
import "./Style.css"


const AddPost = () => {
  const [title , setTitle] = useState("")
  const [description , setDescription ] = useState("")
  const [category , setCategory] = useState("")
 
  const {AddNewPost} = useContext(PostContext)

  const navigate = useNavigate()


  const handlePost = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const newPost : IPost= { id : Number(new Date()) , title , description , category }
    AddNewPost(newPost)
    setTitle("")
    setDescription("")
    setCategory("")
    navigate("/post")
  }
      
  
  return (
    <div className='addPost-container'>

        <h1>Add Post</h1>
        
          <form onSubmit={(e)=> handlePost(e)}>
            <div className='title'>
              <label>Title</label>
              <input type={'text'} value={title} placeholder="title" onChange={(e)=> setTitle(e.target.value)}/>
            </div>

            <div className='description'>
              <label>Description</label>
              <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
            </div>


            <div className='select'>
              <label>Category</label>
              <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value={'IT'}>IT</option>
                <option value={'medical'}>medical</option>
                <option value={"other"}>متفرقه</option>
              </select>
            </div>

            <div className='buttons'>
              <button className='create'>Create Post</button>
              <button className='cancel' onClick={()=> navigate("/post")}>Cancel</button>
            </div>
          </form>
       
    </div>
  )
}

export default AddPost
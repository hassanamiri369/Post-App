import React , {useState , useContext } from 'react'
// import { AddNewPost } from '../../api/api'
import {useNavigate} from "react-router-dom"
import { IPost, PostContext } from '../../context/postContext'

const AddPost = () => {
  const [title , setTitle] = useState("")
  const [description , setDescription ] = useState("")
  const [category , setCategory] = useState("")

  const {AddNewPost} = useContext(PostContext)

  const navigate = useNavigate()


  const handlePost = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const newPost : IPost= { id : Number(new Date()) , title , description , category}
    AddNewPost(newPost)
    setTitle("")
    setDescription("")
    setCategory("")
    navigate("/post")
  }
      
  
  return (
    <div>

        <h1>Add Post</h1>
        <div>
          <form onSubmit={(e)=> handlePost(e)}>
            <div className='title'>
              <label>Title</label>
              <input type={'text'} value={title} placeholder="title" onChange={(e)=> setTitle(e.target.value)}/>
            </div>

            <div className='description'>
              <label>Description</label>
              <textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
            </div>

            <div>
              <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value={'IT'}>IT</option>
                <option value={'medical'}>medical</option>
                <option value={"other"}>متفرقه</option>
              </select>
            </div>

            <div className='buttons'>
              <button className='create'>create post</button>
              <button className='cancel' onClick={()=> navigate("/post")}>cancel</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddPost
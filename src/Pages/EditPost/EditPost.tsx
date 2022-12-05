import React , {useState , useEffect , useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IPost, PostContext } from '../../context/postContext'

import "./Style.css"
const EditPost = () => {


    const navigate = useNavigate()

    const location = useLocation()
    

    const [titleEdit , setTitleEdit]= useState("")
    const [desEdit , setDesEdit] = useState("")
    const [categoryEdit , setCategoryEdit] = useState("")
    // const [imageEidt , setImageEdit] = useState("")


    const context = useContext(PostContext)
    const { state , editPost} = context

    console.log("posts",state.posts)
    console.log(location.state)

   

    useEffect(()=>{
      setTitleEdit(location.state.title)
      setDesEdit(location.state.description )
      setCategoryEdit(location.state.category)
      // setImageEdit(location.state.image)
    } , [location.state.id])

    


   

    const handleEditPost = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const updateEditPost : IPost = {id : location.state.id , title : titleEdit , description : desEdit , category : categoryEdit }
      editPost(location.state.id , updateEditPost )
      setTitleEdit("")
      setDesEdit("")
      setCategoryEdit("")
      // setImageEdit('')
      navigate(`/post`)
    }
    return (
        <div className='editPost-container'>
            <h1>Edit Post</h1>
       
          <form className='form-data ' onSubmit={(e)=> handleEditPost(e)}>
            <div className='title'>
              <label>Title</label>
              <input type={'text'} value={titleEdit} placeholder="title" onChange={(e)=> setTitleEdit(e.target.value)}/>
            </div>

            <div className='description'>
              <label>Description</label>
              <textarea value={desEdit} onChange={(e)=> setDesEdit(e.target.value)}></textarea>
            </div>


            {/* <div className='image'>
              <label>Label</label>
              <input type={'file'} placeholder="image" value={imageEidt} onChange={(e)=> setImageEdit(e.target.value)}/>
            </div> */}

            <div className='select'>
              <label>Category</label>
              <select value={categoryEdit} onChange={(e)=> setCategoryEdit(e.target.value)}>
                <option value={'IT'}>IT</option>
                <option value={'medical'}>medical</option>
                <option value={"other"}>متفرقه</option>
              </select>
            </div>

            <div className='buttons'>
              <button type='submit' className='create' >upDate</button>
              <button className='cancel' onClick={()=> navigate("/post")}>cancel</button>
            </div>
          </form>
       
    </div>
    )
}

export default EditPost

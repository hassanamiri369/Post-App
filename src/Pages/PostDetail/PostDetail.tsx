import React , {useContext , useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPostById } from '../../api/api'
import { IPost, PostContext } from '../../context/postContext'


// style
import "./Style.css"
const PostDetail = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const context = useContext(PostContext)
    const {deletePost  } = context

    const [postDetail , setPostDetail] = useState<any>(null)
    // console.log(postDetail)

    React.useEffect(()=>{
        const getByID = async ()=>{
            // const detailResponse : IPost   = await getPostById(Number(id))
            // if(detailResponse)  setPostDetail(detailResponse)
            getPostById(Number(id))
            .then((res)=> {
                setPostDetail(res.data)
            })
            .catch((err) => {
                console.log("'پیدا نشد " , err)
                setPostDetail(undefined)
            })
        }
    
        getByID()
    } , [id])

    return (
        <div className='PostDetail-container'>

            <div className='button-detail'>
            <button className='goBack' onClick={()=> navigate("/post")}>go back</button>
            <Link to={"/edit"} state={postDetail}  >Edit</Link>
            <button onClick={()=> {
                deletePost(Number(id))
                navigate("/post")
              
            }}>delete</button>
            </div>
            {/* id : {id} */}
            <p>{postDetail === null && <span>Loading ...</span>}</p>
            <p>{postDetail === undefined && <span>not found this post</span>}</p>
            <h1 className='detail-title'>{postDetail?.title}</h1>
           <div className='categories-title'> <span className='category-title'>{postDetail?.category}</span></div>
            <p className='description-title'>{postDetail?.description}</p>
           
           
        </div>
    )
}

export default PostDetail

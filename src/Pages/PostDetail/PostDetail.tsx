import React , {useContext , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById } from '../../api/api'
import { IPost, PostContext } from '../../context/postContext'

const PostDetail = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const context = useContext(PostContext)
    const {deletePost} = context

    const [postDetail , setPostDetail] = useState<IPost | null | undefined >(null)
    console.log(postDetail)

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
        <div>
            id : {id}
            <p>{postDetail === null && <span>Loading ...</span>}</p>
            <p>{postDetail === undefined && <span>not found this post</span>}</p>
            <p>{postDetail?.title}</p>
            <p>{postDetail?.category}</p>
            <p>{postDetail?.description}</p>
            <button onClick={()=> {
                deletePost(Number(id))
                navigate("/post")
              
            }}>delete</button>
            <button onClick={()=> navigate("/post")}>go back</button>

        </div>
    )
}

export default PostDetail

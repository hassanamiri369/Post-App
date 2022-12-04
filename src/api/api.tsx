import axios from "axios"

export const api = axios.create({
    baseURL : "http://localhost:3004"
})

export const getPost = async()=>{
    const response = await api.get("/posts")
    const data = response.data
    return data
}

export const getPostById = (id : number)=>{
    const response = api.get(`/posts/${id}`)
    return response
}


// export const deletePost = (id : number) =>{
//     const response = api.delete(`/posts/${id}`)
    
// }

// export const AddNewPost = async(newPost : IPost) => {
//     const {dispatch} = useContext(PostContext)
//     const response = await api.post("/posts" , newPost)
//     return dispatch({type : "addPost" , payload : response.data})
// }
export const editPost =(id : number , updateData : any )=>{}
import { Action } from "@remix-run/router";
import React , {createContext , useReducer , useEffect} from "react";
import { getPost } from "../api/api"
import { api } from "../api/api";


interface IPostContextChildren {
    children : React.ReactNode | JSX.Element
}

export interface IPost {
    id : number ;
    title : string;
    description : string;
    category : string;
    
}

export interface IState {
    posts : IPost[];
    
}

type IAction = |
    {type : "getPost" , payload : IPost[] }|
    {type : "addPost" , payload : IPost }|
    {type : "deletePost" , payload : IPost[] }|
    {type : "editPost" , payload : IPost[]} |
 
    {type : "getPostById" , payload : IPost}


interface IContext {
    state : IState,
    dispatch :  React.Dispatch<IAction>;
    AddNewPost : (newPost : IPost)=> void;
    deletePost : (id : number) => void;
    editPost : (id : number , updatePost : IPost) => void;
    
   
}

export const PostContext = createContext<IContext>({} as IContext)


const initState = {
    posts :[], 
    editPostState : {}
}

const reducer = (state : IState ,  action : IAction)=>{
    switch(action.type){
        case "getPost":
            return{...state , posts : action.payload}

        case "addPost":
            return {...state , posts : [...state.posts , action.payload]}

        case "deletePost" : 
            return{...state , posts : action.payload}
        
        case "editPost":
            return{...state, posts : action.payload}
        
        default : 
            return state
    }
}

const PostContextProvider = ({children} : IPostContextChildren) =>{


    const [state , dispatch ]= useReducer(reducer , initState)


    // getAll post
    React.useEffect( ()=>{
        const getALl = async ()=>{
            const res : IPost[] = await getPost()
            if(res) dispatch({type : "getPost" , payload : res})
        
        }

        getALl()
    } , [])


    


    const AddNewPost = async(newPost : IPost) => {
        const response = await api.post("/posts" , newPost)
        dispatch({type : "addPost" , payload : response.data})
    }


    

    const deletePost = async(id : number) =>{
        const response =await api.delete(`/posts/${id}`)
        const updatedPost = state.posts.filter(item => item.id !== id)
        dispatch({type : "deletePost" , payload : updatedPost })
    }
    

    const editPost = async (id : number , upDatedPost : IPost)=>{
            const response = await api.patch(`/posts/${id}` , upDatedPost)
            const data = response.data
            const updateState = state.posts.map(item => item.id === data.id ? {...data} : item)
            dispatch({type : "editPost" , payload : updateState})
    }
    

  


    return (
        <PostContext.Provider value={{state , dispatch , AddNewPost , deletePost , editPost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
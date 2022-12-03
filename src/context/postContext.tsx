import React , {createContext , useReducer , useEffect} from "react";
import {getPost } from "../api/api"


interface IPostContextChildren {
    children : React.ReactNode | JSX.Element
}

interface IPost {
    id : number ;
    title : string;
    description : string;
    category : string
}

interface IState {
    posts : IPost[]
}

type IAction = |
    {type : "addPost" , payload : IPost[] }|
    {type : "deletePost" , payload : IPost[] }|
    {type : "editPost" , payload : IPost[]}


interface IContext {
    state : IState,
    dispatch :  React.Dispatch<IAction>
}

export const PostContext = createContext<IContext>({} as IContext)


const initState = {
    posts :[]
}

const reducer = (state : IState ,  action : IAction)=>{
    switch(action.type){
        case "addPost":
            return{...state , posts : action.payload}

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
        if(res){
            dispatch({type : "addPost" , payload : res})
        }
        }

        getALl()
    } , [])

    return (
        <PostContext.Provider value={{state , dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
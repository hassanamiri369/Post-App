import React , {useEffect} from "react"
import axios from "axios"


const api = axios.create({
    baseURL : "http://localhost:3004"
})

export const getPost = async()=>{
    const response = await api.get("/posts")
    const data = response.data
    return data
}

export const getPostById = (id : number)=>{}


export const deletePost = (id : number) =>{}


export const editPost =(id : number , updateData : any )=>{}
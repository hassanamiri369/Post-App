import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <div>
            <Link to={'/post'}>PostList</Link>
            <Link to={'/addPost'}>Add Post</Link>
            <Link to={'/about'}>About</Link>
        </div>
    )
}

export default Header

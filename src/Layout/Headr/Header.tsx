import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <div>
            <Link to={'/'}>PostList</Link>
            <Link to={'/addPost'}>Add Post</Link>
        </div>
    )
}

export default Header

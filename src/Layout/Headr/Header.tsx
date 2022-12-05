import React from 'react'
import {NavLink} from "react-router-dom"

// style 
import "./Style.css"

const Header = () => {
    // const [menu , setMenu] = React.useState(false)

    // const handleMenu = ()=> setMenu(!menu)

    const NavbarLink = ({isActive } : any) => {
        return{
            backgroundColor : isActive ? "tomato" : "white",
            color : isActive ? "white" : "tomato"
        }
    }

    return (
        <div className='container-header'>
            <NavLink style={NavbarLink}  to={'/'}>Home</NavLink>
            <NavLink style={NavbarLink} to={'/post'}>PostList</NavLink>
            <NavLink style={NavbarLink} to={'/addPost'}>Add Post</NavLink>
            <NavLink style={NavbarLink} to={'/about'}>About</NavLink>
        </div>
    )
}

export default Header

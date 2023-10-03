import React from "react";
import {NavLink} from "react-router-dom";

const Header=()=>{
    return(
        <div className="flex items-center justify-between w-screen h-16 px-4 text-white bg-black Header">
            <h1 className="text-2xl" >Dictonary App</h1>
            <div className="flex gap-4 cursor-pointer">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header;
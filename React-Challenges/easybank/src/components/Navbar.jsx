import React from 'react'
import {Link} from "react-router-dom";
import Button from "./Button.jsx";

const Navbar = () => {
    return (
        <>
            <div className="w-screen bg-very-light-gray  relative z-40">
                <div className="flex justify-between w-6xl h-20 items-center mx-auto ">
                    <img src="/images/logo.svg" alt="logo"/>
                    <ul className="flex gap-10 text-grayish-blue">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Careers</Link></li>
                    </ul>
                    <Button text="request invite"/>
                </div>
            </div>

        </>
    )
}
export default Navbar

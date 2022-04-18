import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    return(
        <>
            <div className="mainNavbar">
                <div className="mainNavbarLogo">
                    <img onClick={() => {navigate("/")}}  alt="" src={`${process.env.PUBLIC_URL}/images/logo-white.png`} />
                </div>
            </div>
        </>
    )
}

export default Navbar
import React from 'react'
import {useHistory} from 'react-router-dom'
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/Navbar.css'

function Navbar(){
    const history = useHistory()

    return(
        <>
            <div className="mainNavbar">
                <div className="mainNavbarLogo">
                    <img onClick={() => {history.push("/")}}  alt="" src={`${process.env.PUBLIC_URL}/images/logo-white.png`} />
                </div>
                {/* <div className="mainNavbarItems">
                    <a href="https://www.linkedin.com/in/thiagoccomelli/"><LinkedInIcon style={{fontSize: "30px"}} className="icon" /></a>
                    <a href="https://github.com/ThiagoCComelli"><GitHubIcon className="icon" /></a>
                    <a href="https://www.instagram.com/thiagocomelli_/"><InstagramIcon style={{fontSize: "30px"}} className="icon" /></a>
                </div> */}
            </div>
        </>
    )
}

export default Navbar
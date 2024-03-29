import React from 'react'
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="mainHome">
            <div className="mainHomeContent">
                <div className="mainHomeContentTitle">
                    &lt;Thiago Comelli/&gt;
                </div>
                <code>Programador <b>full-stack</b> desde 2019 não aceitando <strong>"Por Que Sim"</strong> como resposta</code>
                <div className="mainHomeContentsBox">
                    <span onClick={() => {navigate("/about")}} ><PersonOutlineIcon />Sobre mim</span>
                    <span></span>
                    <span onClick={() => {navigate("/projects")}} ><StarOutlineIcon />Projetos</span>
                </div>
                <div className="mainHomeContentsBox">
                    <a href="https://github.com/ThiagoCComelli"><span><GitHubIcon />Github</span></a>
                    <span></span>
                    <a href="https://www.linkedin.com/in/thiagoccomelli/"><span><LinkedInIcon />Linkedin</span></a>
                </div>
            </div>
        </div>
    )
}

export default Home
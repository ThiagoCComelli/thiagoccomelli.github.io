import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import '../styles/About.css'

export default function About() {
    return (
        <div className="mainAbout">
            <div className="mainAboutUpper">
                <div className="mainAboutContent">
                    <div className="mainAboutContentImg">
                        <img alt="Thiago Comelli" src={`${process.env.PUBLIC_URL}/images/profileAvatar.JPG`}></img>
                    </div>
                    <div className="mainAboutContentInfos">
                        <div className="mainAboutContentInfosSection">
                            <h2>Thiago Comelli</h2>
                            <span>Programador e Cientista da Computação</span>
                        </div>
                        <div className="mainAboutContentInfosSection">
                            <strong>Telefone WhatsApp:</strong>
                            <span>(48) 9 9603-0226</span>
                        </div>
                        <div className="mainAboutContentInfosSection">
                            <strong>Email:</strong>
                            <span>thiago.comelli@outlook.com</span>
                        </div>
                        <div className="mainAboutContentInfosSection">
                            <strong>Endereço:</strong>
                            <span>Palhoça/SC e Florianopolis/SC</span>
                        </div>
                        <div className="mainAboutContentInfosSection">
                            <strong>Data de nascimento:</strong>
                            <span>28 de Abril de 2000</span>
                        </div>
                    </div>
                </div>
                <div className="mainAboutFooter">
                    <a href="https://www.linkedin.com/in/thiagoccomelli/"><LinkedInIcon style={{fontSize: "30px"}} className="icon" /></a>
                    <a href="https://github.com/ThiagoCComelli"><GitHubIcon className="icon" /></a>
                    <a href="https://www.instagram.com/thiagocomelli_/"><InstagramIcon style={{fontSize: "30px"}} className="icon" /></a>
                </div>
            </div>
            <div className="mainAboutSeparator">
                <span>EXPERIÊNCIA</span>
                <hr/>
            </div>
            <div className="mainAboutWorks">
                <div className="mainAboutWorksSection">
                    <div className="mainAboutWorksSectionItem">
                        <strong>2019-2021</strong>
                        <span>Iniciação científica</span>
                    </div>
                    <span>

                    </span>
                    <div className="mainAboutWorksSectionItem">
                        <strong>PET Computação</strong>
                        <span>Durante o meu período dentro do PET CCO UFSC a minha principal participação foi a realização de uma Iniciação científica para o laboratório LISA GBD UFSC. Resultando em uma pesquisa sobre a conversão de documentos SHACL Schemas para JSON Schemas. Durante o mesmo período fui coordenador do setor de apoio a graduação, onde fazíamos apoio a alunos em determinadas matérias</span>
                    </div>
                </div>
                <div className="mainAboutWorksSection">
                    <div className="mainAboutWorksSectionItem">
                        <strong>2021-X</strong>
                        <span>Estágio em laboratório</span>
                    </div>
                    <span>

                    </span>
                    <div className="mainAboutWorksSectionItem">
                        <strong>LabSEC - UFSC</strong>
                        <span>Laboratório de Segurança em Computação, atuando no desenvolvimento do PBAD - Padrão brasileiro de assinatura digital. Trabalhando no desenvolvimento de aplicações para validacao de documentos digitais</span>
                    </div>
                </div>
            </div>
            <div className="mainAboutSeparator">
                <span>FORMAÇÃO</span>
                <hr/>
            </div>
            <div className="mainAboutWorks">
                <div className="mainAboutWorksSection">
                    <div className="mainAboutWorksSectionItem">
                        <strong>2019-X</strong>
                        <span>Bacharelado</span>
                    </div>
                    <span>

                    </span>
                    <div className="mainAboutWorksSectionItem">
                        <strong>Ciência da Computação</strong>
                        <span>Universidade Federal de Santa Catarina</span>
                    </div>
                </div>
            </div>
            <div className="mainAboutSeparator">
                <span>HABILIDADES</span>
                <hr/>
            </div>
            <div className="mainAboutColors">
                <span className="mainAboutColorsIcon avancado"></span>
                <span>Avancado</span>
                <span className="mainAboutColorsIcon intermediario"></span>
                <span>Intermediario</span>
                <span className="mainAboutColorsIcon iniciante"></span>
                <span>Iniciante</span>
            </div>
            <div className="mainAboutSkills">
                <span className="avancado">Javascript</span>
                <span className="avancado">React</span>
                <span className="avancado">Python</span>
                <span className="iniciante">Java</span>
                <span className="intermediario">C</span>
                <span className="intermediario">C++</span>
                <span className="iniciante">MySQL</span>
            </div>
        </div>
    )
}

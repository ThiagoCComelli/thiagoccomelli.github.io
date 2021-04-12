import React from 'react'
import '../styles/Home.css'

function Item({alt,image,title,description,url,type}){

    return(
        <>
        <div className="mainHomeItem">
            <div className="mainHomeSubItem">
                <div id={type} className="mainHomeSubItemBack">
                    <img alt="" src={`${process.env.PUBLIC_URL}/images/${image}`} />
                    <div className="mainHomeItemDesc">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={url}><button>Acesse</button></a>
                    </div>
                </div>
                <div className="mainHomeSubItemFront">
                    <h3>{alt}</h3>
                </div>
            </div>
        </div>
        </>
    )
}

function Home(){
    return(
        <>
        <div className="mainHome">
            <Item alt="1" image="pizzaria.png" title="Pizzaria Website" description="Cardapio online para estabelecimentos" url="https://thiagoccomelli.github.io/Ecommerce/" type="project" />
            <Item alt="2" image="repair.png" title="AppTech Website" description="Sistema para registro de chamados com o cliente e solicitação de serviços" url="https://apptechsolucoes.web.app/" type="project" />
            <Item alt="3" image="back-r8.jpeg" title="Audi R8 Website" description="Apresentação de conteúdo para fins comerciais" url="https://thiagoccomelli.github.io/audi-r8-website/" type="project" />
            <Item alt="4" image="instagram.png" title="Instagram Clone" description="Instagram Clone para estudar a ferramenta Firebase e React REDUX" url="https://instagramclonetc.web.app/" type="project" />
            <Item alt="5" image="exploretheworld.png" title="Explore The World" description="Landing Page feita para testar a transição Dinâmica de imagens." url="https://thiagoccomelli.github.io/exploretheworld/" type="project" />
            <Item alt="6" image="urlshortener.jpeg" title="URL Shortener" description="Gerencimanto de encurtamento de links" url="https://urluid.tk/" type="project" />
            <Item alt="7" image="json.png" title="SHACL Schema to JSON Schema" description="Ferramenta de conversão de documentos SHACL Schema para JSON Schema" url="https://github.com/gbd-ufsc/JS2SHACL" type="research" />
        </div>
        </>
    )
}

export default Home
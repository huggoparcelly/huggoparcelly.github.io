
import movieCrudCard from '../../assets/movie-crud-card.png'
import fakebook from '../../assets/fakebook.png'
import onlineStore from '../../assets/online-store.png'
import pixelArt from '../../assets/pixel-art.png'
import projectRecipes from '../../assets/project-recipes.png'
import scroolImage from '../../assets/icon.png'
import todoListFresh from '../../assets/todo-list-fresh.png'
import hpmeta from '../../assets/hpmeta.png'

import './styles.css'
import ProjectCard from '../ProjectCard'
import { useRef } from 'react'



export default function Project() {

    const cardsData = [
        {
            imageSrc: todoListFresh,
            title: "Fresh TODO List",
            link: "https://todo-list-fresh.deno.dev/",
        }
        ,
        {
            imageSrc: hpmeta,
            title: "Relatorio de Vendas",
            link: "https://dsmeta-huggoparcelly.netlify.app/",
        }
        ,
        {
            imageSrc: movieCrudCard,
            title: "Movie CRUD Card",
            link: "https://huggoparcelly.github.io/movie-card-crud/",
        }
        ,
        {
            imageSrc: fakebook,
            title: "Facebook Singup",
            link: "https://huggoparcelly.github.io/facebook-singup//"
        },
        {
            imageSrc: onlineStore,
            title: "Onlie Store",
            link: "https://huggoparcelly.github.io/online-store/"
        },
        {
            imageSrc: pixelArt,
            title: "Pixels Art",
            link: "https://huggoparcelly.github.io/pixels-art/"
        },
        {
            imageSrc: projectRecipes,
            title: "Project Recipes",
            link: "https://huggoparcelly.github.io/project-recipes/"
        }
    ]

    const carrossel = useRef<HTMLInputElement>(null);

    const handleLeftScroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (carrossel.current != null) {
            carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
        }

    };

    const handleRightScroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (carrossel.current != null) {
            carrossel.current.scrollLeft += carrossel.current.offsetWidth;
        }
    };


    return (
        <div className='component-carousel'>

            <div className='container'>
                <button onClick={handleLeftScroll} className="scrool left">
                    <img src={scroolImage} alt="Scrool Left" />
                </button>

                <div className="carousel" ref={carrossel}>
                    {/* {renderCards()} */}
                    {cardsData.map((card, index) => (
                        <div key={index}>
                            <ProjectCard card={card} />
                        </div>
                    ))}
                </div>

                <button onClick={handleRightScroll} className="scrool right">
                    <img src={scroolImage} alt="Scrool Right" />
                </button>
            </div>


        </div>

    )
}
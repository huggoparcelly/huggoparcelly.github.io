// import Link from "next/link";
// 'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import movieCrudCard from '../../assets/movie-crud-card.png'
import fakebook from '../../assets/fakebook.png'
import onlineStore from '../../assets/online-store.png'
import pixelArt from '../../assets/pixel-art.png'
import projectRecipes from '../../assets/project-recipes.png'

import './styles.css'
import ProjectCard from '../ProjectCard'


export default function Project() {

    const cardsData = [
        {
            imageSrc: movieCrudCard,
            title: "Movie CRUD Card",
            link: "https://huggoparcelly.github.io/movie-card-crud/",
        },
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

    return (
        <div className='carousel'>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                dynamicHeight={false}
                axis="horizontal"
                centerMode={true}
                useKeyboardArrows={true}
                centerSlidePercentage={33.3}
                emulateTouch={true}
            >
                {cardsData.map((card, index) => (
                    <div key={index}>
                        <ProjectCard card={card}/>
                    </div>
                ))}

            </Carousel>

        </div>

    )
}
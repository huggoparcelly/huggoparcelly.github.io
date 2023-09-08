// import Link from "next/link";

import './styles.css'

type CardData = {
    card: {
        imageSrc: string;
        title: string;
        link: string;
    }
}

export default function ProjectCard(props: CardData) {
    const { card } = props;
    return (
        <div className="card">
            <img src={card.imageSrc} alt={card.title} />
            <h2>{card.title}</h2>
            <a href={card.link} target='_blank'>View More</a>
        </div>

    )
}
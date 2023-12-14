import { Card } from 'react-bootstrap';
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
        <Card>
            <Card.Img variant="top" src={card.imageSrc} className='card-img' />
            <Card.Body>
                <Card.Title className='card-title'>{card.title}</Card.Title>
                <Card.Link className='card-link' href={card.link} target='_blank'>ver projeto</Card.Link>
            </Card.Body>
        </Card>

    )
}
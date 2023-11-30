import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
            <header>
                <h2><a href="/">Bem Vindo</a></h2>
                <div id="menu-icon">&#8801;</div> 
                <ul>
                    <li>{<Link to="/">Home</Link>}</li>
                    <li>{<Link to="/about">Sobre Mim</Link>}</li>
                    {/* <li>{<Link to="/projects">Projetos</Link>}</li> */}
                    <li>{<Link to="/contacts">Contatos</Link>}</li>
                </ul>
            </header>

    )
}
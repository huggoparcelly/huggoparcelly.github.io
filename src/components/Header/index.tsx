import { Link } from 'react-router-dom'
import './styles.css'
import { useState } from 'react';

export default function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    return (
            <header>
                <h2><a href="/">Bem Vindo</a></h2>
                <div id="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? 'x' : '☰'}
                
                </div>
                
                <ul className={isMenuOpen ? 'menu-open' : ''}>
                    <li onClick={toggleMenu}>{<Link to="/">Home</Link>}</li>
                    <li onClick={toggleMenu}>{<Link to="/about">Sobre Mim</Link>}</li>
                    {/* <li onClick={toggleMenu}>{<Link to="/projects">Projetos</Link>}</li> */}
                    <li onClick={toggleMenu}>{<Link to="/contacts">Contatos</Link>}</li>
                </ul>
                
            </header>

    )
}
import './styles.css'

export default function Header() {
    return (
            <header>
                <h2>Bem Vindo</h2>
                <div id="menu-icon">&#8801;</div> 
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </header>

    )
}
import profilePhoto from "../../assets/foto-huggo-parcelly.png"
import './styles.css'

export default function Profile() {

    return (
        <section className="about-container">
            <img src={profilePhoto} alt="Huggo Parcelly Profile Photo" className="image" />

            <h2>Huggo Parcelly</h2>
            <div className="description">
                <p>Meu portfólio é a minha história em constante crescimento, misturando minha paixão pela programação com minha busca acadêmica.
                    Tenho formação em desenvolvimento web Full-Stack, onde ganhei habilidades sólidas em front-end e back-end.
                    Atualmente, estou no meio da minha graduação em Ciências da Computação, enquanto trabalho como desenvolvedor back-end na Ford Motor Company,
                    onde contribuo para soluções robustas.
                </p>
            </div>

        </section>
    )
}
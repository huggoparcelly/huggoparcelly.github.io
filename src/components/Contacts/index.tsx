import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css'

export default function Contacts() {
    return(
        <section className="contacts-container page-container">

            <h2>Contacts</h2>
            <div>
                <a href="https://www.linkedin.com/in/huggoparcelly" target="_blank"><i className="bi bi-linkedin"></i> /huggoparcelly</a>
            </div>
            
            <div>
                <a href="https://github.com/huggoparcelly"><i className="bi bi-github"></i> /huggoparcelly</a>
            </div>
            
            <div>
                <a><i className="bi bi-envelope-fill"></i> h.parcelly@gmail.com</a>
            </div>
            
        </section>
    )
}
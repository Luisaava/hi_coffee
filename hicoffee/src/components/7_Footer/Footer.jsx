import './Footer.css';

export function Header() {
    return (
    <section id="footer" className="footer">
        <div className="footer-content">
            <div className="lang">
                <h3>Languages</h3>
                <a href="index_pt.html" className="btn-translate"><span className="fi fi-br"></span></a>
                <a href="index.html" className="btn-translate"><span className="fi fi-us"></span></a>
            </div>

            <div className="footer-location">
                <p>📍 Av. Madre Benvenuta, Florianópolis - SC</p>
                <p>Mon - Fri: 08:00 - 18:00</p>
            </div>

            <div className="footer-contact">
                <div className="footer-redes">
                    <a href="https://www.instagram.com/luisaava" className="btn-social">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/?locale=pt_BR" className="btn-social">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
                <p>+1 (999) 9999-77-66</p>
                <p>hicoffee@logoipsum.com</p>
            </div>
        </div>

        <div className="footer-copyright">
            <p>© 2026 HiCoffee!</p>
        </div>
    </section>
    );
}
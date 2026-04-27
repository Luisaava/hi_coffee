// import './About.css';
import splash_2 from '../assets/small_splash.png'
import brewer from '../assets/img/brewer.jpg'

export function About() {

return (
    <section id="about-us" className="about-us">
            <div className="history">
                <div className="splash"> <img src={splash_2}/> </div>
                <div className="history-img"> <img src={brewer}/>
                </div>
                <div className="history-text">
                    <h2> More than coffee...</h2>
                    <p>We don't just "make" coffee; we solve for it. To us, every roast profile is a variable,
                    and every extraction is a calculated move toward the perfect result.
                    We approach the bean-to-cup journey with a mindset rooted in precision and flow.
                    By understanding the underlying physics of temperature and the chemistry of flavor,
                    we’ve built a menu where nothing is left to chance.</p>
                </div>
            </div>
        </section>
    );
}
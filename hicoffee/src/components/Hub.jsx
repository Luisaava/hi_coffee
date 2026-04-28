// import './Hub.css';
import cafeteria from '../assets/img/cafeteria.jpg';
import splash_1 from '../assets/img/big_splash.png';


export default function Hub() {
    return (
    <section className = "hub">
            <div className="splashy"> <img src={splash_1}/></div>
            <div className="hub-imagery">
                <img src={cafeteria}/>
            </div>
            <div className="hub-text">
            <h2>Warm your heart in our bean to cup experience!</h2>
            </div>
        </section>
    );
}
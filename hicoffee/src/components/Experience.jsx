// import './Experience.css';
import cafezinho from '../assets/img/exp1.png'
import grao from '../assets/img/exp2.png'
import estrela from '../assets/img/exp3.svg'

export default function Experience() {

return (
    <section className="experience">
        <div className="exp">
            <div className="exp-top">
                <h1>And the results speak for itself</h1>
                <p>Founded in 2018, our coffee shop has been a place where friends meet, <strong>ideas grow</strong>, and memories are made. We believe coffee is not just a drink — it's an experience.</p>
            </div>

            <div className="exp-grid">
                <div className="stat-item">
                    <span className="stat-img"> <img src = {cafezinho}/> 
                    </span>
                    <span className="stat-label"><strong>50K+</strong> Cups Served</span>
                </div>
                <div className="stat-item">
                    <span className="stat-img"> <img src = {grao}/> 
                    </span>
                    <span className="stat-label"><strong>10+</strong> Coffee Origins</span>
                </div>
                <div className="stat-item">
                    <span className="stat-img"> <img src = {estrela}/> 
                    </span>
                    <span className="stat-label"> <strong>4.9</strong> Average Rating</span>
                </div>
            </div>
        </div>
        </section>
    );
}
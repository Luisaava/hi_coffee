import './Hero.css';
import barista from '../../assets/img/cafeteria.avif';

export function Hero() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Made to coffee lovers, by coffee addicts</h1>
        <h2>Need a boost of energy? <strong>Hi, Coffee!</strong></h2>
      </div>
      <div className="home-img">
        <img src={barista} alt="barista" />
      </div>
    </section>
  );
}
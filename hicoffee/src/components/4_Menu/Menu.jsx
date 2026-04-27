import './Menu.css';
import cafe from '../../assets/img/cafeteria.avif';
export function Menu() {
    return (
<section id="menu" className="menu">
        <div className="menu-grid">
            
            <div className="menu-item">
                <div className="menu-img"> <img src={cafe}/> </div>
                <h3> Artisanal Latte</h3>
                <p>Artisanal coffees crafted with technical precision and rich flavor</p>
            </div>
            <div className="menu-item">
                <div className="menu-img"> <img src="https://images.pexels.com/photos/1510685/pexels-photo-1510685.jpeg?cs=srgb&dl=pexels-valeriya-1510685.jpg&fm=jpg"/> </div>
                <h3> Daily Pastries</h3>
                <p>Fresh, flaky, and golden-brown. The perfect companion for your morning boost</p>
            </div>
            <div className="menu-item">
                <div className="menu-img"> <img src="https://img.freepik.com/premium-photo/various-sweets-desserts-coffee-shop-display-close-up_759575-6302.jpg"/> </div>
                <h3>Sweet Indulgence</h3>
                <p>A curated selection of desserts designed to sweeten your routine and warm your heart!</p>
            </div>
        </div>
    </section>
    );
}
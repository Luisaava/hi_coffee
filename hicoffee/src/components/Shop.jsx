import cafe from '../assets/img/item_1.webp';
import salgado from '../assets/img/item_2.jpg'
import doces from '../assets/img/item_3.jpg'


export default function Shop() {
    return (
    <section id="shop" className="shop">
        <div className="shop-grid">
            
            <div className="shop-item">
                <div className="shop-img"> <img src={cafe}/> </div>
                <h3> Artisanal Latte</h3>
                <p>Artisanal coffees crafted with technical precision and rich flavor</p>
            </div>
            <div className="shop-item">
                <div className="shop-img"> <img src={salgado}/> </div>
                <h3> Daily Pastries</h3>
                <p>Fresh, flaky, and golden-brown. The perfect companion for your morning boost</p>
            </div>
            <div className="shop-item">
                <div className="shop-img"> <img src={doces}/> </div>
                <h3>Sweet Indulgence</h3>
                <p>A curated selection of desserts designed to sweeten your routine and warm your heart!</p>
            </div>
            <div className="shop-item">
                <div className="shop-img"> <img src={cafe}/> </div>
                <h3> Artisanal Latte</h3>
                <p>Artisanal coffees crafted with technical precision and rich flavor</p>
            </div>
            <div className="shop-item">
                <div className="shop-img"> <img src={salgado}/> </div>
                <h3> Daily Pastries</h3>
                <p>Fresh, flaky, and golden-brown. The perfect companion for your morning boost</p>
            </div>
            <div className="shop-item">
                <div className="shop-img"> <img src={doces}/> </div>
                <h3>Sweet Indulgence</h3>
                <p>A curated selection of desserts designed to sweeten your routine and warm your heart!</p>
            </div>
        </div>
    </section>
    );
}
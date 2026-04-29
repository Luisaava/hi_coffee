import cafe from '../assets/img/shop_1.webp';
import salgado from '../assets/img/shop_2.png'
import doces from '../assets/img/shop_3.png'


export default function Shop() {
    return (
    <section id="shop" className="shop">
        <div className="shop-grid">
            
            <div className="shop-item">
                <h3> Artisanal Latte</h3>
                <div className="shop-img"> <img src={cafe}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
            <div className="shop-item">
                <h3> Daily Pastries</h3>
                <div className="shop-img"> <img src={salgado}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
            <div className="shop-item">
                <h3>Sweet Indulgence</h3>
                <div className="shop-img"> <img src={doces}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
            <div className="shop-item">
                <h3> Artisanal Latte</h3>
                <div className="shop-img"> <img src={cafe}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
            <div className="shop-item">
                <h3> Daily Pastries</h3>
                <div className="shop-img"> <img src={salgado}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
            <div className="shop-item">
                <h3>Sweet Indulgence</h3>
                <div className="shop-img"> <img src={doces}/> </div>
                <h2> 10$ </h2>
                <a className="btn-shop">Add to cart</a>
            </div>
        </div>
    </section>
    );
}
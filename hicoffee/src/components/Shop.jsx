import cafe from '../assets/img/shop_1.webp';
import salgado from '../assets/img/shop_2.png'
import doces from '../assets/img/shop_3.png'
import afo from '../assets/img/afogatto.png'
import sub from '../assets/img/sub.png'
import choco from '../assets/img/choco.webp'



export default function Shop({addToCart}) {
    return (
    <section id="shop" className="shop">
        <div className="shop-grid">
            
            <div className="shop-item">
                <h3> Expresso</h3>
                <div className="shop-img"> <img src={cafe}/> </div>
                <h2> 1$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Expresso", price: 1 })}>
                    Add to cart
                </button>
            </div>
            <div className="shop-item">
                <h3> Mochaccino</h3>
                <div className="shop-img"> <img src={salgado}/> </div>
                <h2> 3$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Mochaccino", price: 3 })}>
                    Add to cart
                </button>            </div>
            <div className="shop-item">
                <h3>Matcha Latte</h3>
                <div className="shop-img"> <img src={doces}/> </div>
                <h2> 5$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Matcha Latte", price: 5 })}>
                    Add to cart
                </button>            </div>
            <div className="shop-item">
                <h3> Submarine</h3>
                <div className="shop-img"> <img src={sub}/> </div>
                <h2> 3$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Submarine", price: 3 })}>
                    Add to cart
                </button>            </div>
            <div className="shop-item">
                <h3> Afogatto</h3>
                <div className="shop-img"> <img src={afo}/> </div>
                <h2> 4$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Afogatto", price: 4 })}>
                    Add to cart
                </button>            </div>
            <div className="shop-item">
                <h3>Hot Chocolate</h3>
                <div className="shop-img"> <img src={choco}/> </div>
                <h2> 2$ </h2>
                <button 
                    className="btn-shop-item" 
                    onClick={() => addToCart({ name: "Hot Chocolate", price: 2 })}>
                    Add to cart
                </button>            </div>
        </div>
    </section>
    );
}
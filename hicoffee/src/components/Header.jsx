import { useState } from 'react';

export default function Header({ cartItems = [], esvaziarCarrinho }) {
    const [cartOpen, setCartOpen] = useState(false);
    const valorTotal =  cartItems.reduce((sum, item) => { 
    return sum + item.price},0);

    return (
        <section id="header" className="header">
            <div className="headbar">
                <div className="logo"> HiCoffee! ☕</div>
                
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about-us">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                    <a href="#shop" className="btn-shop">Shop Now!</a>
                </ul>

                <div className="cart-container" style={{ position: 'relative' }}>
                    <div className="btn-cart" onClick={() => setCartOpen(!cartOpen)} style={{ cursor: 'pointer' }}>
                        <i className="bi bi-cart2"> {cartItems.length}</i>
                    </div>

                    {cartOpen && (
                        <div className="cart-cascade">
                            {cartItems.length === 0 ? (
                                <p className="cart-empty">Your cart is empty!</p>
                            ) : (
                                <>
                                    <ul className="cart-list">
                                        {cartItems.map((item, index) => (
                                            <li key={index}>
                                                {item.name} - ${item.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="cart-total">
                                        <strong>Total: ${valorTotal}</strong>
                                    </div>
                                    <button className="btn-checkout" onClick = {esvaziarCarrinho} >Checkout</button>
                                </>
                            )}
                        </div>
                    )} 
                </div> 
            </div>
        </section>
    );
}
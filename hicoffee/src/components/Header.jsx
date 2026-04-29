// import './Header.css'

export default function Header() {
    return (
    <section id="header" className="header">
        <div className = "headbar">
            <div className = "logo"> HiCoffee! ☕</div>
            <ul className = "nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#footer">Contact</a></li>
                <a href="#shop" className="btn-nav">Shop Now!</a>
            </ul>
            <a href="#cart" className="cart">
                <i className="bi bi-cart2"></i>
            </a>
        </div>
    </section>
    );
}
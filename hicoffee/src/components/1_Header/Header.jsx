import './Header.css'
export function Header() {
    return (
            <header>
        <div className = "headbar">
            <div className = "logo"> HiCoffee! ☕</div>
            <ul className = "nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="https://instagram.com/luisaava" className="btn-nav">Shop Now!</a>
        </div>
    </header>
    );
}
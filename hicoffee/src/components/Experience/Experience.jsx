import './Footer.css';

export function Experience() {

return (
    <section className="experience">
        <div className="exp">
            <div className="exp-top">
                <h1>And the results speak for itself</h1>
                <p>Founded in 2018, our coffee shop has been a place where friends meet, <strong>ideas grow</strong>, and memories are made. We believe coffee is not just a drink — it's an experience.</p>
            </div>

            <div className="exp-grid">
                <div className="stat-item">
                    <span className="stat-img"> <img src = "https://static.vecteezy.com/system/resources/thumbnails/023/438/448/small/espresso-coffee-cutout-free-png.png"/> 
                    </span>
                    <span className="stat-label"><strong>50K+</strong> Cups Served</span>
                </div>
                <div className="stat-item">
                    <span className="stat-img"> <img src = "https://www.pngall.com/wp-content/uploads/2016/04/Coffee-Beans-Free-PNG-Image.png"/> 
                    </span>
                    <span className="stat-label"><strong>10+</strong> Coffee Origins</span>
                </div>
                <div className="stat-item">
                    <span className="stat-img"> <img src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Green_star_41-108-41.svg"/> 
                    </span>
                    <span className="stat-label"> <strong>4.9</strong> Average Rating</span>
                </div>
            </div>
        </div>
        </section>
    );
}
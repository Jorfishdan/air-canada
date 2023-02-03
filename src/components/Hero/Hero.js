import './Hero.scss';
import StarbucksHero from '../../assets/images/starbucks-hero.png';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__image-container">
                <img className="hero__image" src={StarbucksHero} alt="Starbucks Offer Image"></img>
            </div>
            <div className="hero__text-container">
                <h1 className="hero__title">Good afternoon, Rachel</h1>
                <p className="hero__tagline">Earn faster and travel better with your Aeroplan credit card.</p>
                <button className="hero__button">View Offers</button>
            </div>
        </section>
    )
}
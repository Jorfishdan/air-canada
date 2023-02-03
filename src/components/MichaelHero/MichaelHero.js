import './MichaelHero.scss';
// import StarbucksHero from '../../assets/images/starbucks-hero.png';
import creditCard from "../../assets/images/creditCard.svg"

function MichaelHero() {
    return (
        <section className="michael">
            <div className="michael__image-container">
                <img className="michael__image" src={creditCard} alt="Starbucks Offer Image"></img>
            </div>
            <div className="michael__text-container">
                <h1 className="michael__title">Good afternoon, Michael</h1>
                <p className="michael__tagline">Earn faster and travel better with an Aeroplan credit card.</p>
                <button className="michael__button">Learn More</button>
            </div>
        </section>
    )
}
export default MichaelHero;
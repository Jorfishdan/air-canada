import "./EStoreCard.scss";
import viewEight from "../../assets/images/viewEight.png";
import theRedBag from "../../assets/images/theRedBag.png";
import dyson from "../../assets/images/dyson.png";
import rename from "../../assets/images/rename.png";
import bestBuy from "../../assets/images/bestBuy.png";
import viewAll from "../../assets/images/viewAll.png";

function eStoreCard() {
  return (
    <section className="wrapper">
      <div className="wrapper__mega-wrapper">
      <div className="eStore__text-wrapper">
      <h2 className="eStore__header">eStore popular retailers</h2>
      <img className="eStore__view" src={viewEight} alt="shopping bag icon"/>
      </div>
      <img className="eStore__bag" src={theRedBag} alt="shopping bag icon"/>
      </div>
      <div className="wrapper__wrapper">
      <div className="card">
        <img className="card1" src={rename} alt="recieve reminders" />
      </div>
      <div className="card">
        <img className="card2" src={bestBuy} alt="get Best Buy" />
      </div>
      <div className="card">
        <img className="card3" src={dyson} alt="get a dyson" />
      </div>
      </div>
      <div className="card__view-wrapper">
      <img className="card__view" src={viewAll} alt="click to view all the products in the category" />
      </div>
    </section>
  );
}

export default eStoreCard;


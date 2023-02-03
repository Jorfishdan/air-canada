import "./CurrentDealsCard.scss";
import tag from "../../assets/images/tag.svg";
import currentDeals1 from "../../assets/images/currentDeals1.png";
import currentDeals2 from "../../assets/images/currentDeals2.png";
import currentDeals3 from "../../assets/images/currentDeals3.png";
import viewAll from "../../assets/images/viewAll.png";
import currentDealsHeader from "../../assets/images/currentDealsHeader.png";

function CurrentDealsCard() {
  return (
    <section className="deals">
      <div className="deals__wrapper">
        <img className="deals__tag" src={tag} alt="price tag icon" />

        <h2 className="deals__header">Current Deals</h2>
      </div>
      <div className="dealcard__wrapper">
        <div className="dealcard">
          <img
            className="dealcard__deal1"
            src={currentDeals1}
            alt="burberry deal for areopoints"
          />
        </div>
        <div className="dealcard">
          <img
            className="dealcard__deal2"
            src={currentDeals2}
            alt="punching bag for aeropoints"
          />
        </div>
        <div className="dealcard">
          <img
            className="dealcard__deal3"
            src={currentDeals3}
            alt="blender for aeropints"
          />
        </div>
      </div>
      <div className="dealcard__view-wrapper">
        <img
          className="dealcard__view"
          src={viewAll}
          alt="click to view all the products in the category"
        />
      </div>
    </section>
  );
}

export default CurrentDealsCard;

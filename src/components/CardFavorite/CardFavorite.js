import "./CardFavorite.scss";
import starbucks from "../../assets/images/starbucks.png";
import uber from "../../assets/images/uber.png";
import heart2 from "../../assets/images/heart2.png";
import lulu from "../../assets/images/lululemon.webp";
import viewAll from "../../assets/images/viewAll.png";

function CardFavorite() {
  return (
    <section className="favorite">
      <div className="favoriteheader">
        <img src={heart2} alt="hear" className="cardfavorite__heart1" />
        <h1 className="favoriteheader__title">Your Favorites</h1>
      </div>
      <div className="favoritewrapper">
        <div className="cardfavorite">
          <img src={heart2} alt="heart" className="cardfavorite__heart" />
          <img src={starbucks} alt="sbucks" className="cardfavorite__logo" />
        </div>
        <div className="cardfavorite">
          <img src={heart2} alt="heart" className="cardfavorite__heart" />
          <img src={uber} alt="sbucks" className="cardfavorite__logo" />
        </div>
        <div className="cardfavorite">
          <img src={heart2} alt="heart" className="cardfavorite__heart" />
          <img src={lulu} alt="sbucks" className="cardfavorite__logo" />
        </div>
      </div>
      <div className="favebuttons">
        <p className="favebuttons__1">Browse Offers</p>
        <p className="favebuttons__2">Browse Offers</p>
        <p className="favebuttons__3">Browse Offers</p>
      </div>
      <div className="favoritebottom">
        <img src={viewAll} alt="viewall" className="favoritebottom__text" />
      </div>
    </section>
  );
}

export default CardFavorite;

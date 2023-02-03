import "./CardFavorite.scss";
import heart from "../../assets/images/heart.svg";
import starbucks from "../../assets/images/starbucks.png";
import uber from "../../assets/images/uber.png";
import fav from "../../assets/images/fav.SVG";
import lulu from "../../assets/images/lululemon.webp";

function CardFavorite() {
  return (
    <section>
      <div className="favoriteheader">
        <img src={heart} alt="hear" className="cardfavorite__heart1" />
        <h1 className="favoriteheader__title">Your Favorites</h1>
      </div>
      <div className="favoritewrapper">
        <div className="cardfavorite">
          <img src={heart} alt="heart" className="cardfavorite__heart" />
          <img src={starbucks} alt="sbucks" className="cardfavorite__logo" />
        </div>
        <div className="cardfavorite">
          <img src={heart} alt="heart" className="cardfavorite__heart" />
          <img src={uber} alt="sbucks" className="cardfavorite__logo" />
        </div>
        <div className="cardfavorite">
          <img src={heart} alt="heart" className="cardfavorite__heart" />
          <img src={lulu} alt="sbucks" className="cardfavorite__logo" />
        </div>
      </div>
      <div className="favebuttons">
        <p className="favebuttons__1">Browse Offers</p>
        <p className="favebuttons__2">Browse Offers</p>
        <p className="favebuttons__3">Browse Offers</p>
      </div>
      <p className="favoritebottom">View All ></p>
    </section>
  );
}

export default CardFavorite;

import "./MichaelCardFavorite.scss";
import ssense from "../../assets/images/ssense.png";
import lulu from "../../assets/images/lulu.png";
import apple from "../../assets/images/apple.png";
import bookMark from "../../assets/images/bookMark.png";

function MichaelCardFavorite() {
  return (
    <section className="michaelfavorite">
      <div className="michaelfavoriteheader">
        <img className="card__bookmark" src={bookMark} alt="bookmark" />
        <h1 className="mikefavoriteheader__title">Favorite Stores</h1>
      </div>
      <div className="favoritewrapper">
        <div className="michaelcardfavorite">
          <img className="mikecard__ssense" src={ssense} alt="get ssense" />
        </div>
        <div className="michaelcardfavorite">
          <img className="mikecard__ssense" src={lulu} alt="get ssense" />
        </div>
        <div className="michaelcardfavorite">
          <img className="mikecard__ssense" src={apple} alt="get ssense" />
        </div>
      </div>
      <div className="mikefavebuttons">
        <p className="mikefavebuttons__1">Browse Offers</p>
        <p className="mikefavebuttons__2">Browse Offers</p>
        <p className="mikefavebuttons__3">Browse Offers</p>
      </div>
      <div className="mikefavoritebottom">
        <p>View All > </p>
      </div>
    </section>
  );
}

export default MichaelCardFavorite;

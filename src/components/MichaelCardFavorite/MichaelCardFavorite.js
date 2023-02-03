import "./MichaelCardFavorite.scss";
import ssense from  "../../assets/images/ssense.png";
import lulu from "../../assets/images/lulu.png";
import apple from "../../assets/images/apple.png";
import bookMark from "../../assets/images/bookMark.png"


function MichaelCardFavorite() {
  return (
    <section className="michaelfavorite">
      <div className="michaelfavoriteheader">
        <img className="card__bookmark" src={bookMark} alt="bookmark" />
        <h1 className="favoriteheader__title">Favorite Stores</h1>
      </div>
      <div className="favoritewrapper">
        <div className="cardfavorite">
          <img className="card__ssense" src={ssense} alt="get ssense" />
  
        </div>
        <div className="cardfavorite">
        <img className="card__ssense" src={lulu} alt="get ssense" />
         
        </div>
        <div className="cardfavorite">
        <img className="card__ssense" src={apple} alt="get ssense" />
      
        </div>
      </div>
      <div className="favebuttons">
        <p className="favebuttons__1">Browse Offers</p>
        <p className="favebuttons__2">Browse Offers</p>
        <p className="favebuttons__3">Browse Offers</p>
      </div>
      <p className="favoritebottom">View All > </p>
    </section>
  );
}

export default MichaelCardFavorite;

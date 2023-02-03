import "./MichaelDoMore.scss";
import logo from "../../assets/images/pts.png";
import deposit from "../../assets/images/depost.png";
import donate from "../../assets/images/donate.png";
import boost from "../../assets/images/boost2.png";
import gift from "../../assets/images/gift2.png";

function MichaelDoMore() {
  return (
    <section className="michaeldomore">
      <div className="michaeldomore__header">
        <img src={logo} alt="logo" className="michaeldomore__header--img" />
        <div className="michaeldomore__headercontainer">
       
          <h2 className="michaeldomore__header--title">
            Do more with your aeroplan points
          </h2>
          <p className="michaeldomore__header--text">View All (7) ⌄</p>
        </div>
      </div>
      <div className="michaeldomore__gallery">
        <div className="michaeldomore__feature img1">
          <img className="michaeldomore__feature-pic1" src={deposit} alt="depost" />
        </div>
        <div className="michaeldomore__feature img2">
        <img className="michaeldomore__feature-pic2" src={donate} alt="depost" />
        </div>
        <div className="michaeldomore__feature img3">
        <img className="michaeldomore__feature-pic3" src={boost} alt="depost" />
        </div>
        <div className="michaeldomore__feature img4">
        <img className="michaeldomore__feature-pic4" src={gift} alt="depost" />
        </div>
      </div>
    </section>
  );
}
export default MichaelDoMore;

import "./CardUnlock.scss";
import unlock from "../../assets/images/unlock.svg";

function CardUnlock() {
  return (
    <section className="unlock">
      <div className="unlockheader">
        <img src={unlock} alt="hear" className="cardunlock__lock" />
        <h1 className="unlockheader__title">Unlock Offers</h1>
      </div>
      <div className="unlockwrapper">
        <div className="cardunlock ubereats"></div>
        <div className="cardunlock uberredeem"></div>
        <div className="cardunlock uberone"></div>
      </div>
      <p className="unlockbottom">View All ></p>
    </section>
  );
}

export default CardUnlock;

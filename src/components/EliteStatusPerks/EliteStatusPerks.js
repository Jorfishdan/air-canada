import "./EliteStatusPerks.scss";
import priority from "../../assets/images/contacts.png";
import priorityCheckIn from "../../assets/images/priorityCheckIn.png";
import upgrade from "../../assets/images/flyUpgrade.png";
function EliteStatusPerks() {
  return (
    <section className="elite__wrapper">
      <div className="elite">
        <img className="elite1" src={priority} alt="get priority class" />
      </div>

      <div className="elite">
        <img
          className="elite2"
          src={priorityCheckIn}
          alt="get priority class"
        />
      </div>

      <div className="elite">
        <img className="elite3" src={upgrade} alt="get priority class" />
      </div>
    </section>
  );
}

export default EliteStatusPerks;

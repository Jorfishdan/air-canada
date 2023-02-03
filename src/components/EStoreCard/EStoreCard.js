import "./EStoreCard.scss";
import viewEight from "../../assets/images/viewEight.png";
import theRedBag from "../../assets/images/theRedBag.png";

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
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      </div>
    </section>
  );
}

export default eStoreCard;

{/* <img className="wrapper__header"src={EStoreHeader} alt="header of eStore category" /> */}

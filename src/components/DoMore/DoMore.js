import "./DoMore.scss";
import logo from "../../assets/images/deposit-icon.jpeg";

function DoMore() {
  return (
    <section className="domore">
      <div className="domore__header">
        <img src={logo} alt="logo" className="domore__header--img" />
        <div className="domore__headercontainer">
          <h2 className="domore__header--title">
            Do more with your aeroplan points
          </h2>
          <p className="domore__header--text">View All (7) ⌄</p>
        </div>
      </div>
      <div className="domore__gallery">
        <div className="domore__card dm1"></div>
        <div className="domore__card dm2"></div>
        <div className="domore__card dm3"></div>
        <div className="domore__card dm4"></div>
        <div className="domore__card dm5"></div>
      </div>
    </section>
  );
}
export default DoMore;

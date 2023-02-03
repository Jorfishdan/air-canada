import './KeepStatus.scss';
import viewAll from "../../assets/images/viewAll.png";

export default function KeepStatus() {
    return (
        <section className="keepstatus">
            <div className="keepstatus__header">
                <span className="keepstatus__title">Keep your Super Elite Status</span>
            </div>
            <div className="keepstatus__wrapper">
                <div className="keepstatus__card keepstatus__card--points"></div>
                <div className="keepstatus__card keepstatus__card--shop"></div>
                <div className="keepstatus__card keepstatus__card--book"></div>
            </div>

            <div className="keepstatus__bottom">
                <img src={viewAll} alt="view all option" className="keepstatus__bottom-text"></img>
            </div>
        </section>
    )
}
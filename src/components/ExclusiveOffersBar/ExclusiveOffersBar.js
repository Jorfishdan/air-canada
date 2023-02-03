import './ExclusiveOffersBar.scss'
import plane from "../../assets/images/planeOffers.svg";
import list from "../../assets/images/list.svg";
import bag from "../../assets/images/shoppingBag.svg"
import redeem from "../../assets/images/redeem.svg";

function ExclusiveOffersBar() {
    return (
        <>
        <div className="exOffers">
        {/* <p className="exOffers__header">Your exclusive offers</p> */}
        <article className="exOffers__main-wrapper">
            <div className="exOffers__wrapper">
            {/* <img className="exOffers__list"src={list} alt="list icon" /> */}
            <p className="exOffers__everyday-essentials">Everyday Essential</p>
            </div>
            <div className="exOffers__wrapper">
            {/* <img className="exOffers__everyday" src={redeem} alt="credit card icon" /> */}
            <p className="exOffers__travel">Travel</p>
            </div>
            <div className="exOffers__wrapper">
            {/* <img className="exOffers__plane" src={plane} alt="plane icon" /> */}
            <p className="exOffers__eStore">eStore</p>
            </div>
            <div className="exOffers__wrapper">
            {/* <img className="exOffers__bag" src={bag} alt="shopping bag icon" /> */}
            <p className="exOffers__manage">Manage Your Page</p>
            </div>
            
        </article>
        </div>
        </>
    )
}

export default ExclusiveOffersBar;
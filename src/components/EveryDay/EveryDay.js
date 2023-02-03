import CardFavorite from "../CardFavorite/CardFavorite";
import CardUnlock from "../CardUnlock/CardUnlock";
import CurrentDealsCard from "../CurrentDealsCard/CurrentDealsCard";
import RightBanner from "../RightBanner/RightBanner";
import EStoreCard from "../EStoreCard/EStoreCard";
import "./EveryDay.scss";

function EveryDay({ isRowShowing }) {
  return (
    <section className="everyday">
      <div className="everyday__left">
        <CardFavorite />
        <CurrentDealsCard />
        {isRowShowing && <EStoreCard />}
        <CardUnlock />
      </div>
      <div className="everyday__right">
        <RightBanner />
      </div>
    </section>
  );
}

export default EveryDay;

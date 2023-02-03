import "./Michael.scss";
import MichaelHero from "../../components/MichaelHero/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner/MichaelBanner";
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";
import MichaelHeader from "../../components/MichaelHeader/MichaelHeader";
function Michael() {
  return (
    <>
      <MichaelHeader />
      <MichaelHero />
      <MichaelBanner />
      <UpcomingTrips />
      <MichaelCardFavorite />
    </>
  );
}

export default Michael;

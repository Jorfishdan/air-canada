import "./Michael.scss";
import MichaelHero from "../../components/MichaelHero/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner/MichaelBanner";
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";
import EliteStatusPerks from "../../components/EliteStatusPerks/EliteStatusPerks";
import MichaelDoMore from "../../components/MichaelDoMore/MichaelDoMore";

import MichaelHeader from "../../components/MichaelHeader/MichaelHeader";
import EliteWrapper from "../../components/EliteWrapper/EliteWrapper";
import MichaelLinks from "../../components/MichaelLinks/MichaelLinks";

function Michael() {
  return (
    <>
      <MichaelHeader />
      <MichaelHero />
      <MichaelLinks />
      <EliteWrapper />
      <MichaelDoMore />
    </>
  );
}
export default Michael;

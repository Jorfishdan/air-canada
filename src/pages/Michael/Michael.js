import "./Michael.scss";
import MichaelHero from "../../components/MichaelHero/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner/MichaelBanner";
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";
import EliteStatusPerks from "../../components/EliteStatusPerks/EliteStatusPerks";
import KeepStatus from "../../components/KeepStatus/KeepStatus";

function Michael () {
    return(
        <>
        <MichaelHero />
        <MichaelBanner />
        <UpcomingTrips />
        <EliteStatusPerks />
        <KeepStatus />
        <MichaelCardFavorite />
        </>
    )

}

export default Michael;

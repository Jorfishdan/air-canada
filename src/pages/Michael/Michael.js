import "./Michael.scss"
import MichaelHero from "../../components/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner"
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";
import EliteStatusPerks from "../../components/EliteStatusPerks/EliteStatusPerks";

function Michael () {
    return(
        <>
        <MichaelHero />
        <MichaelBanner />
        <UpcomingTrips />
        <EliteStatusPerks />
        <MichaelCardFavorite />
        </>
    )
}

export default Michael;
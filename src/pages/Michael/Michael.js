import "./Michael.scss"
import MichaelHero from "../../components/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner"
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";

function Michael () {
    return(
        <>
        <MichaelHero />
        <MichaelBanner />
        <UpcomingTrips />
        <MichaelCardFavorite />
        </>
    )
}

export default Michael;
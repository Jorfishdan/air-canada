import "./Michael.scss"
import MichaelHero from "../../components/MichaelHero";
import MichaelBanner from "../../components/MichaelBanner"
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";

function Michael () {
    return(
        <>
        <MichaelHero />
        <MichaelBanner />
        <UpcomingTrips />
        </>
    )
}

export default Michael;
import './EliteWrapper.scss';
import UpcomingTrips from "../../components/UpcomingTrips/UpcomingTrips";
import MichaelCardFavorite from "../../components/MichaelCardFavorite/MichaelCardFavorite";
import EliteStatusPerks from "../../components/EliteStatusPerks/EliteStatusPerks";
import KeepStatus from "../../components/KeepStatus/KeepStatus";
import MichaelBanner from '../MichaelBanner/MichaelBanner';

export default function EliteWrapper() {
    return (
        <section className="elitewrapper">
            <div className="elitewrapper__left">
                <UpcomingTrips />
                <EliteStatusPerks />
                <KeepStatus />
                <MichaelCardFavorite />
            </div>
            <div className="elitewrapper__right">
                <MichaelBanner />
            </div>
        </section>
    )
}
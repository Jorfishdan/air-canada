import './UpcomingTrips.scss';
import trips from "../../assets/images/upcomingTrips.svg";
function UpcomingTrips() {
    return  <div className="tripsCard">
        <img className="tripsCard__image" src={trips} alt="rebook a trip" />
    </div>;
}

export default UpcomingTrips;
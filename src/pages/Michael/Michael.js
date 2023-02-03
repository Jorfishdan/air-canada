import "./Michael.scss";
import MichaelHero from "../../components/MichaelHero/MichaelHero";
import MichaelHeader from "../../components/MichaelHeader/MichaelHeader";
import EliteWrapper from "../../components/EliteWrapper/EliteWrapper";
import MichaelLinks from "../../components/MichaelLinks/MichaelLinks";

function Michael () {
    return(
        <>
        <MichaelHeader />
        <MichaelHero />
        <MichaelLinks />
        <EliteWrapper />
        </>
    )

}
export default Michael;

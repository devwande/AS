import ProjectPages from "./ProjectPages";
import FederalImage from "../assets/images/federaltower.svg";

const FederalPage = () => {
    return (
        <ProjectPages
            src={FederalImage}
            alt="federal"
            title="Federal II Tower"
            content="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
        />
    );
};

export default FederalPage;

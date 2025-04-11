import ProjectPages from "./ProjectPages";
import TrinityImage from "../assets/images/trinitybank.svg";

const TrinityPage = () => {
    return (
        <ProjectPages
            src={TrinityImage}
            alt="trinity"
            title="Trinity Bank Tower"
            content="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
        />
    );
};

export default TrinityPage;

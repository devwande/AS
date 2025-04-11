import ProjectPages from "./ProjectPages";
import SeraphImage from "../assets/images/seraphstation.svg";


const SeraphPage = () => {
    return (
        <ProjectPages
            src={SeraphImage}
            alt="seraph"
            title="Seraph Station"
            content="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
        />
    );
};

export default SeraphPage;

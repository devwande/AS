import ProjectPages from "./ProjectPages";
import ParamourImage from "../assets/images/projectparamour.svg";

const ParamourPage = () => {
    return (
        <ProjectPages
            src={ParamourImage}
            alt="paramour"
            title="Project Paramour"
            content="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
        />
    );
};

export default ParamourPage;

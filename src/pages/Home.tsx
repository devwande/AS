import Navbar from "../components/Navbar.tsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
interface Project {
    id: number;
    name: string;
    src: string;
}



const projects: Project[] = [
    { id: 1, name: 'Project Del Sol', src: "src/assets/images/de-sol.webp" },
    { id: 2, name: '228B Tower', src: "src/assets/images/228B.svg" },
    { id: 3, name: 'Le Prototype', src: "src/assets/images/prototype.svg" },
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="relative space-y-20">
                <img src={"src/assets/images/paramour.webp"} alt="paramour" className="mx-auto h-[calc(100vh-82px)] w-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-start px-8 font-primary space-y-20">
                    <div>
                        <h1 className="text-white text-5xl font-spartan font-bold">
                            Project Paramour
                        </h1>
                        <p className="text-white font-spartan font-medium text-lg max-w-[600px] mt-4">
                            Project made for an art museum near Southwest London. Project
                            Paramour is a statement of bold, modern architecture.
                        </p>
                    </div>
                    <div>
                        <button className='button font-primary '>
                            See our portfolio
                            <ArrowRight className="ml-5"  />
                        </button>
                    </div>
                </div>

                <hr className="w-1/3 container-in " />
            </div>

            <div className="container-body h-screen flex justify-center items-center">
                <div className="space-y-10 ">
                    <h1 className="font-bold text-6xl">
                        Welcome to Arch Studio
                    </h1>
                    <p className="text-xl">
                        We have a unique network and skillset to help bring your projects
                        to life. Our small team of highly skilled individuals combined
                        with our large network put us in a strong position to deliver
                        exceptional results.
                    </p>
                    <p className="text-xl">
                        Over the past 10 years, we have worked on all kinds of projects.
                        From stations to high-rise buildings, we create spaces that
                        inspire and delight.
                    </p>
                    <p className="text-xl">
                        We work closely with our clients so that we understand the
                        intricacies of each project. This allows us to work in harmony
                        with the surrounding area to create truly stunning projects that
                        will stand the test of time.
                    </p>
                </div>
            </div>

            <div className="relative space-y-10 h-screen">
                <img src={"src/assets/images/smallTeam.svg"} alt="team" className="w-full mx-auto h-[calc(100vh-100px)]" />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-start container-in font-primary space-y-20">
                    <h1 className="text-white text-6xl font-bold">
                        Small team, big ideas
                    </h1>
                    <button className="button font-primary">
                        About us {""}
                        <ArrowRight className="ml-5"  />
                    </button>
                </div>
            </div>

            <h1 className="container-in text-5xl font-bold">Featured</h1>

            <div className="space-y-4 container-body">
                {projects.map((project) => (
                    <div key={project.id} className="relative">
                        <div className="relative h-64 w-full">
                            <img
                                src={project.src || "/placeholder.svg"}
                                alt="projects"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                                <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                                <a onClick={() => navigate("/portfolio")} className="text-white/80 text-sm hover:text-white transition-colors">
                                    View All Projects
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="button font-primary w-full flex justify-center">
                    See All
                    <ArrowRight className="ml-5"  />
            </button>
            </div>

            <Footer />

        </>
    )
}
export default Home;

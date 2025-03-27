import Navbar from "../components/Navbar.tsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Paramour from "../assets/images/paramour.webp";
import {motion} from "framer-motion";


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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative hidden md:flex">
                <div className="absolute top-0 left-12">
                    <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-medium-gray rotate-90 tracking-[18px] mt-[90px] -ml-[60px] font-primary text-xsm "
                    >
                        {["H", "O", "M", "E"].map((letter, index) => (
                            <motion.span key={index} variants={itemVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
            <Navbar />
            <main className="max-w-[570px] mx-auto md:max-w-full xl:max-w-[1440px] space-y-20 md:px-24">
                <div className=" font-primary">
                    {/*FIRST PAGE*/}
                    <div className="h-[calc(100vh-98px)] md:h-[calc(100vh-135px)] relative">
                        <img src={Paramour} alt="Paramour" className="absolute mx-auto inset-0 h-full w-full object-cover brightness-75"/>
                        <div className="absolute inset-0 flex flex-col items-start justify-center space-y-6 pl-7 sm:pl-12">
                            <h1 className="text-white text-md md:text-[96px] md:leading-[80px] max-w-[400px]">Project Paramour</h1>
                            <p className="text-white font-medium text-xsm max-w-[500px]">
                                Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                            </p>
                            <button className="button mt-20 font-primary">
                                See Our Portfolio <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div><hr className="w-1/3 container-in sm:mx-0 hidden" /></div>

                <div className="container-in sm:mx-0 h-full flex justify-center items-center text-start">

                    <div className="space-y-10 font-primary">
                        <h1 className={"hidden md:block text-xl mb-0 font-bold text-light-gray font-primary"}>Welcome</h1>
                        <h1 className="font-bold text-md">
                            Welcome to Arch Studio
                        </h1>
                        <p className="text-xsm">
                            We have a unique network and skillset to help bring your projects
                            to life. Our small team of highly skilled individuals combined
                            with our large network put us in a strong position to deliver
                            exceptional results.
                        </p>
                        <p className="text-xsm">
                            Over the past 10 years, we have worked on all kinds of projects.
                            From stations to high-rise buildings, we create spaces that
                            inspire and delight.
                        </p>
                        <p className="text-xsm">
                            We work closely with our clients so that we understand the
                            intricacies of each project. This allows us to work in harmony
                            with the surrounding area to create truly stunning projects that
                            will stand the test of time.
                        </p>
                    </div>
                </div>

                <div className="relative space-y-10 h-full font-primary">
                    <img src={"src/assets/images/smallTeam.svg"} alt="team" className="w-full mx-auto h-[calc(100vh-300px)] brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center text-start container-in mx-10 md:mx-20 ls:mx-32 space-y-20 max-w-[350px]">
                        <h1 className="text-white text-md font-bold">
                            Small team, big ideas
                        </h1>
                        <button className="button">
                            About us {""}
                            <ArrowRight  />
                        </button>
                    </div>
                </div>

                <div className={"flex justify-between"}>
                    <h1 className="container-in sm:mx-0 text-md md:tracking-wide md:font-bold font-primary">Featured</h1>
                    <button className={"button  hidden sm:flex"}>
                        See All {""}
                        <ArrowRight />
                    </button>
                </div>

                <div className="space-y-4 container-body sm:px-0 font-primary">
                    {projects.map((project) => (
                        <div key={project.id} className="relative">
                            <div className="relative h-64 w-full">
                                <img
                                    src={project.src || "/placeholder.svg"}
                                    alt="projects"
                                    className="absolute w-full h-full object-cover"
                                />

                                <div className={"absolute inset-0 bg-black/30"}></div>

                                <div className={"absolute inset-0 flex justify-between"}>
                                    <div className=" flex flex-col justify-end p-6">
                                        <h3 className="text-white text-sm font-bold">{project.name}</h3>
                                        <a onClick={() => navigate("/portfolio")} className="text-white/80 text-xsm hover:text-white transition-colors">
                                            View All Projects
                                        </a>
                                    </div>
                                    <div className={"hidden md:block p-3 text-light-gray text-[250px] leading-[200px] font-bold font-primary"}><h1 className={"flex items-end"}>{project.id}</h1></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="button font-primary w-full flex justify-center sm:hidden">
                        See All
                        <ArrowRight className="ml-5"  />
                </button>
                </div>
            </main>

            <Footer />

        </>
    )
}
export default Home;

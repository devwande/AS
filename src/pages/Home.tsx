import Navbar from "../components/Navbar.tsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Paramour from "../assets/images/paramour.webp";
import {motion} from "framer-motion";
import { useState } from "react";
import ParamourPage from "../components/ParamourPage.tsx";
import SeraphPage from "../components/SeraphPage.tsx";
import FederalPage from "../components/FederalPage.tsx";
import TrinityPage from "../components/TrinityPage.tsx";


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

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } }
};


const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageOrder = ["example", "paramour", "seraph", "federal", "trinity"];

    const advance = (index: number) => {
        setCurrentPage(index);
    };

    const navigate = useNavigate();
    return (
        <motion.main initial="hidden" animate="visible" exit="hidden" className={"max-w-[1440px] w-full mx-auto relative"}>
            <div className="hidden md:flex">
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
                <motion.section  className="font-primary">
                    {/*FIRST PAGE*/}
                    <div className="h-[calc(100vh-98px)] md:h-[calc(100vh-135px)] max-h-[800px] relative">
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} src={Paramour} alt="Paramour" className="absolute mx-auto inset-0 h-full max-h-[800px] w-full object-cover brightness-75 lg:hidden"  data-aos={"fade-up"}/>
                        <motion.div  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}  className="absolute inset-0 flex flex-col items-start justify-center space-y-6 pl-7 sm:pl-12 ls:pl-20 lg:hidden transition-all duration-300">
                            <h1 className="text-white text-[clamp(3rem,9.14vw+1rem,5rem)] leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] max-w-[400px] ">Project <br/> Paramour</h1>
                            <p className="text-white font-medium text-[clamp(1.125rem,5.14vw+1rem,1.5rem)] leading-[clamp(1.1rem,10.3vw+1.2rem,2.15rem)] max-w-[500px]">
                                Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                            </p>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}  className="button px-12 mt-20 font-primary">
                                See Our Portfolio {""}
                                <ArrowRight />
                            </motion.button>

                        </motion.div>
                        {/*initial={{ opacity: 1, }} whileInView={{ opacity: 1, scale: 1.001, transition: { duration: 3 }, }} viewport={{ once: true }}*/}

                        {/* DESKTOP VERSION */}
                        <div className={"absolute mx-auto h-full max-h-[800px] w-full object-cover"}>
                            {pageOrder[currentPage] === "paramour" && <ParamourPage />}
                            {pageOrder[currentPage] === "seraph" && <SeraphPage />}
                            {pageOrder[currentPage] === "federal" && <FederalPage />}
                            {pageOrder[currentPage] === "trinity" && <TrinityPage />}
                        </div>

                        <div className="hidden lg:block absolute bg-white font-spartan text-xsm font-bold bottom-[0px] left-[-80px] ">
                            {[1, 2, 3, 4].map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => advance(item)}
                                    className={`p-5 w-[80px] ${
                                        currentPage === item
                                            ? "bg-black text-white"
                                            : "bg-white text-gray  hover:bg-light-gray"
                                    }`}
                                >
                                    {`0${item}`}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <div><hr className="w-1/3 container-in sm:mx-0 hidden" /></div>

                <motion.section variants={staggerContainer} initial="hidden" animate="visible" className="relative container-body max-w-[570px] md:max-w-[1440px] mx-auto font-primary my-[76px] md:my-[120px] lg:my-[145px] xl:my-[190px] px-6 text-dark-gray sm:px-1 grid ld:grid-cols-[1fr_350px] ld:gap-20 xl:gap-32 transition-all duration-300">
                    <div className=""><p className="absolute font-bold tracking-[-0.125rem] leading-[-8.5rem] text-[clamp(8.5rem,15.5vw+1rem,16rem)] text-light-gray opacity-50 hidden md:block -top-[6rem] ls:-top-[7.5rem] lg:-top-[10rem] xl:-top-[12.5rem] z-30">Welcome</p>
                        <div className="border-[0.5px] border-dark-gray opacity-70 w-[65px] absolute left-[1.5rem] md:hidden"></div>
                        <div className="ld:ml-auto ld:min-w-[500px] max-w-[572px] ls:max-w-[700px] lg:max-w-[445px]"><h2 className="text-[clamp(3rem,9.14vw+1rem,4.2rem)] leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-[800] tracking-[0.075rem] whitespace-nowrap pb-8 pt-[4.125rem]">Welcome to <br/> Arch Studio</h2></div>
                        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="ld:ml-auto grid gap-6 ld:min-w-[500px] max-w-[572px] ls:max-w-[700px] lg:max-w-[700px] ld:max-w-[445px] md:text-[1.125rem]">
                                <p >We have a unique network and skillset to help bring your projects to life. Our small team of
                                    highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
                                <p>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise
                                    buildings, we create spaces that inspire and delight.</p>
                                <p>We work closely with our clients so that we understand the intricacies of each project. This
                                    allows us to work in harmony the surrounding area to create truly stunning
                                    projects that will stand the test of time.</p>
                        </div>
                    </div>
                    <div data-aos={"zoom-in"} data-aos-delay={"600"} className="z-0 h-full max-w-[350px] mr-[-0.35rem] hidden ld:block">
                        <img src={"src/assets/images/welcome.svg"} alt={"welcome-image"}/>
                    </div>
                </motion.section>

                <section className="relative space-y-10  max-h-[500px]  w-full font-primary">
                    <img src={"src/assets/images/smallTeam.svg"} alt="team"
                         className="w-full h-[500px] object-cover brightness-50"/>
                    <div
                        className="absolute inset-0 top-1/4 justify-center text-start container-in mx-10 md:mx-20 ls:mx-32 space-y-20 max-w-[350px]">
                        <h1 className="text-white text-[clamp(3rem,9.14vw+1rem,4.2rem)] leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-[800] tracking-[0.075rem] whitespace-nowrap ">
                            Small team, <br/>big ideas
                        </h1>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button">
                            About us {""}
                            <ArrowRight/>
                        </motion.button>
                    </div>
                </section>

                <div className={"flex justify-between pt-16"}>
                    <motion.h1 variants={fadeIn} className="container-in sm:mx-0 text-md md:tracking-wide md:font-bold font-primary">Featured</motion.h1>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/portfolio')} className={"button px-10 hidden sm:flex"}>
                        See All {""}
                        <ArrowRight/>
                    </motion.button>
                </div>

                <motion.section
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="space-y-4 container-body sm:px-0 font-primary ls:grid ls:grid-cols-3 ls:gap-x-2 xl:gap-x-6 transition-all duration-300"
                >
                    {projects.map((project) => (
                        <motion.div
                            variants={fadeIn}
                            key={project.id}
                            className="relative"
                        >
                            <div className="relative h-64 w-full ls:h-[650px] ls:w-auto">
                                <motion.img
                                    src={project.src || "/placeholder.svg"}
                                    alt="projects"
                                    className="absolute w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 ls:h-auto bg-black/30" />
                                <div className="absolute inset-0 flex justify-between">
                                    <div className="flex flex-col justify-end p-6">
                                        <h3 className="text-white text-sm font-bold">{project.name}</h3>
                                        <a
                                            onClick={() => navigate("/portfolio")}
                                            className="text-white/80 text-xsm hover:text-white transition-colors cursor-pointer"
                                        >
                                            View All Projects
                                        </a>
                                    </div>
                                    <div className="ls:absolute md:block p-3 ls:-right-4 text-light-gray text-[250px] leading-[200px] font-bold font-primary">
                                        <h1 className="max-md:flex max-md:items-end">{project.id}</h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <button
                        onClick={() => navigate("/portfolio")}
                        className="button font-primary w-full flex justify-center sm:hidden"
                    >
                        See All
                        <ArrowRight className="ml-5" />
                    </button>
                </motion.section>


                <div className={"space-y-0"}><Footer /></div>

            </main>
        </motion.main>
    )
}
export default Home;

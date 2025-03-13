import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import {motion} from "framer-motion";

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

const About = () => {
    return (
        <>
            <div className="relative hidden md:flex">
                <div className="absolute top-0 left-12">
                    <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-medium-gray rotate-90 tracking-widest mt-[58px] -ml-[30px] font-primary text-xsm "
                    >
                        {["A", "B", "O", "U", "T"].map((letter, index) => (
                            <motion.span key={index} variants={itemVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Navbar/>

            <div className={"relative "}>
                <img src={"src/assets/images/about.svg"} alt="about" className={"h-[375px] w-full object-cover"}/>
                <div className="absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
            </div>
            <main className={"space-y-48"}>
                <div className={"container-body space-y-8"}>
                    <h1 className={"font-primary font-bold text-6xl"}>Your team of professionals</h1>
                    <p className={"font-primary text-2xl text-medium-gray"}>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                </div>

                <hr className={"w-1/3 container-in mt-24 mb-20" }/>

                <div className={"container-body space-y-8 "}>
                    <h1 className={"font-primary font-bold text-md"}>Our Heritage</h1>
                    <p className={"font-primary text-2xl text-medium-gray"}>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                    <p className={"font-primary text-2xl text-medium-gray"}>Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
                    <p className={"font-primary text-2xl text-medium-gray"}>Our small team of world-class professionals provides input on every project.</p>
                </div>

                <div className={"container-body space-y-12 "}>
                   <h1 className={"font-primary font-bold text-md"}>The Leaders</h1>
                    <div className={"space-y-12"}>
                        <div className={"font-primary"}>
                            <img src={"src/assets/images/Jake.svg"} alt={"Jake"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Jake Richards</h1>
                            <p className={"text-xsm text-dark-gray"}>Chief Architect</p>
                        </div>

                        <div className={"font-primary"}>
                            <img src={"src/assets/images/thompson.svg"} alt={"Thompson"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Thompson Smith</h1>
                            <p className={"text-xsm text-dark-gray"}>Head of finance</p>
                        </div>

                        <div className={"font-primary"}>
                            <img src={"src/assets/images/jackson.svg"} alt={"Jackson"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Jackson Rouke</h1>
                            <p className={"text-xsm text-dark-gray"}>Lead Designer</p>
                        </div>

                        <div className={"font-primary"}>
                            <img src={"src/assets/images/Maria.svg"} alt={"Maria"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Maria Simpson</h1>
                            <p className={"text-xsm text-dark-gray"}>Senior Architect</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default About

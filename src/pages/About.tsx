import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import {motion} from "framer-motion";
import Heritage from "../assets/images/heritage.svg";

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
        <main className={"max-w-[1440px] w-full mx-auto relative"}>
            <section className="hidden md:flex">
                <div className="absolute top-0 left-12">
                    <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-medium-gray rotate-90 tracking-[18px] mt-[145px] -ml-[115px] font-primary text-xsm "
                    >
                        {["A", "B", "O", "U", "T", " ", "U", "S" ].map((letter, index) => (
                            <motion.span key={index} variants={itemVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Navbar/>

            <div className={"relative md:px-24 md:mb-24 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440]"}>
                <img src={"src/assets/images/about.svg"} alt="about" className={"h-[250px] inset-0 brightness-50 md:h-[calc(100vh-135px)] max-h-[800px] w-full object-cover md:max-w-[635px]"}/>
                <div className="md:hidden absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
                <div className={"hidden md:block absolute mr-auto z-10 bg-white h-[450px] w-[500px] ls:h-[450px] ls:w-[600px] xl:w-[700px] xl:h-[500px] transition-all duration-300 bottom-0 right-[9%] xl:right-[10%]"}>
                    <div className={"hidden md:block absolute space-y-28 "}>
                        <div><h1 className={"font-primary absolute -top-[25%] right-0 ls:right-5 ls:-top-[30%] font-bold text-light-gray text-[clamp(8.5rem,15.5vw+1.3rem,12.635rem)] tracking-[0.125rem]"}>About</h1></div>
                        <hr className={"w-1/5 ml-12"}/>
                        <div className={"ml-12 space-y-4 xl:space-y-8 md:mr-auto"}>
                            <h1 className={"font-primary font-bold text-[4.5rem] leading-[64px]"}>Your team of<br/>professionals</h1>
                            <p className={"font-primary text-xsm text-medium-gray"}>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                        </div>
                    </div>
                </div>
            </div>

            <main className={"space-y-12 md:px-18 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440px]"}>
                <div className={"md:hidden space-y-8 mx-4 relative max-w-[450px]"}>
                    <h1 className={"font-primary font-bold text-[3rem] leading-[3.25rem] tracking-[1.2px]"}>Your team of professionals</h1>
                    <p className={"font-primary text-xsm text-medium-gray"}>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                </div>

                <div><hr className={"w-1/3 container-in md:px-0  md:hidden" }/></div>

                <section className={"container-body h-full mx-auto"}>
                    <div className="hidden md:block w-[104px] bg-black h-[1px] ml-[25px] md:ml-0"></div>
                    <div className={"grid md:grid-cols-2 gap-10 mb-[4.125rem]"}>
                        <div className={" md:px-0"}>
                            <h2 className="font-primary text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap mt-[4.125rem]">Our <br/> Heritage
                            </h2>
                            <div className={"grid gap-5 ld:gap-10 xl:gap-10 xl:max-w-[445px]"}>
                                <p className={"font-primary text-xsm text-medium-gray"}>Founded in 2007, we started as a
                                    trio of architects. Our complimentary skills and relentless attention to detail
                                    turned Arch into one of the most sought after boutique firms in the country.</p>
                                <p className={"font-primary text-xsm text-medium-gray"}>Specializing in Urban Design
                                    allowed us to focus on creating exceptional structures that live in harmony with
                                    their surroundings. We consider every detail from every surrounding element to
                                    inform our designs. </p>
                                <p className={"font-primary text-xsm text-medium-gray"}>Our small team of world-class
                                    professionals provides input on every project.</p>
                            </div>
                        </div>

                        <div className={"hidden md:block"}>
                            <img className={"h-full w-full object-cover ml-auto max-w-[500px]"} src={Heritage}
                                 alt={"Heritage"}/>
                        </div>
                    </div>
                </section>

                <div className={"container-body space-y-12 md:gap-y-20 lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-6"}>
                    <div className={""}><h1 className={"font-primary font-bold text-md "}>The <br/>Leaders</h1></div>
                    <div className={"space-y-12 md:grid md:grid-cols-2 md:gap-3 "}>
                        <div className={"font-primary max-w-[350px]"}>
                            <img src={"src/assets/images/Jake.svg"} alt={"Jake"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Jake Richards</h1>
                            <p className={"text-xsm text-dark-gray"}>Chief Architect</p>
                        </div>

                        <div className={"font-primary max-w-[350px] w-full max-md:justify-self-end "}>
                            <img src={"src/assets/images/thompson.svg"} alt={"Thompson"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Thompson Smith</h1>
                            <p className={"text-xsm text-dark-gray"}>Head of finance</p>
                        </div>

                        <div className={"font-primary max-w-[350px]"}>
                            <img src={"src/assets/images/jackson.svg"} alt={"Jackson"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Jackson Rouke</h1>
                            <p className={"text-xsm text-dark-gray"}>Lead Designer</p>
                        </div>

                        <div className={"font-primary max-w-[350px] w-full max-md:justify-self-end"}>
                            <img src={"src/assets/images/Maria.svg"} alt={"Maria"} className={"w-full"}/>
                            <h1 className={"text-sm font-bold"}>Maria Simpson</h1>
                            <p className={"text-xsm text-dark-gray"}>Senior Architect</p>
                        </div>
                    </div>
                </div>
            </main>
            <div className={"space-y-0 max-w-[570px] mx-auto md:max-w-full xl:max-w-[1440px] md:px-24"}><Footer /></div>
        </main>
    )
}
export default About

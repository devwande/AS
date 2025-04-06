import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import {ArrowRight} from "lucide-react";
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

interface ContactProps{
    office: string;
    mail: string;
    address: string;
    phone: string;
}

const contact: ContactProps[] = [
    { office: "Main Office", mail: "archone@mail.com", address: "1892  Chenoweth Drive TN", phone: "123-456-3451", },
    { office: "Office II", mail: "archtwo@mail.com", address: "3399  Wines Lane TX", phone: "832-123-4321", },
];

const Contact = () => {
    return (
        <main className={"max-w-[1440px] w-full mx-auto relative"}>
            <section className="hidden md:flex">
                <div className="absolute top-0 left-12">
                    <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-medium-gray rotate-90 tracking-[18px] mt-[135px] -ml-[104px] font-primary text-xsm "
                    >
                        {["C", "O", "N", "T", "A", "C", "T" ].map((letter, index) => (
                            <motion.span key={index} variants={itemVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Navbar />

            <section className={"relative md:px-24 md:mb-24 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440]"}>
                <img src={"src/assets/images/telephone.svg"} alt="Contact-us" className={"h-[250px] inset-0 brightness-50 md:h-[calc(100vh-135px)] max-h-[780px] w-full object-cover object-right-bottom  md:max-w-[650px]"}/>
                <div className="md:hidden absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
                <div className={"hidden md:block absolute mr-auto z-10 bg-white h-[450px] w-[500px] ls:h-[450px] ls:w-[600px] xl:w-[700px] xl:h-[500px] transition-all duration-300 bottom-0 right-[9%] xl:right-[10%]"}>
                    <div className={"hidden md:block absolute space-y-28 "}>
                        <div><h1 className={"font-primary absolute -top-[25%] right-0 ls:right-5 ls:-top-[35%] font-bold text-light-gray text-[clamp(8.5rem,15.5vw+1.3rem,12.635rem)] tracking-[0.125rem]"}>Contact</h1></div>
                        <hr className={"w-1/5 ml-12"}/>
                        <div className={"ml-12 space-y-4 xl:space-y-8 md:mr-auto"}>
                            <h1 className={"font-primary font-bold text-[4.5rem] leading-[64px]"}>Tell us about <br/>your project</h1>
                            <p className={"font-primary text-xsm text-medium-gray"}>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                        </div>
                    </div>
                </div>
            </section>

            <main className={"space-y-12 md:px-18 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440px]"}>
                <div className={"md:hidden container-body space-y-8"}>
                    <h1 className={"font-primary font-bold text-6xl"}>Tell us about <br />your project</h1>
                    <p className={"font-primary text-xsm text-medium-gray"}>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                </div>

                <hr className={"w-1/3 container-in mt-24 mb-20 md:hidden" }/>

                <div className={"container-body space-y-16 ld:grid ld:grid-cols-[0.8fr_1.5fr] ls:gap-48 w-full"}>
                    <div><h1 className={"font-primary text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap "}>Contact <br/> Details</h1></div>

                    <div className={"space-y-8 md:grid md:grid-cols-2 md:gap-16"}>
                        {contact.map(contact => (
                            <div className={"text-xsm font-primary space-y-8 whitespace-nowrap md:ml-auto"}>
                                <div className={"text-light-gray font-bold"}>{contact.office}</div>

                                <div className={"space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-48 md:grid-cols-1 w-fit "}>
                                    <div>
                                        <p>Mail: {contact.mail}</p>
                                        <p>Address: {contact.address}</p>
                                        <p>Phone: {contact.phone}</p>
                                    </div>

                                    <div className={"font-primary font-bold"}>
                                        <button className={"flex gap-x-6"}>View on Map <ArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <img src={"src/assets/images/Maps.svg"} alt={"Maps"} className={"w-full object-cover transition-all duration-300 h-[400px]"} />

                <div className={"container-body ls:grid ls:grid-cols-[1fr_1.5fr]"}>
                    <div><h1 className={"font-primary font-bold text-md pb-20 "}>Connect <br/>with us</h1></div>

                    <div className={"container-body"}>
                        <form className={"font-primary text-2xl"}>
                            <div className={"flex flex-col gap-y-12"}>
                                <input type={"text"} id={"name"} placeholder={"Name"} className={"px-4 focus:outline-hidden text-black placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                                <hr className="border-t-[3px]" />
                                <input type={"text"} id={"name"} placeholder={"Email"} className={"px-4 focus:outline-hidden placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                                <hr className="border-t-[3px]" />
                                <input type={"text"} id={"name"} placeholder={"Message"} className={"px-4 focus:outline-hidden placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                                <hr className="border-t-[3px]" />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-black text-white p-4 w-16 h-16 flex items-center justify-center"  >
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
            <div className={"space-y-0 max-w-[570px] mx-auto md:max-w-full xl:max-w-[1440px] md:px-24"}><Footer /></div>
            </main>
    )
}
export default Contact;


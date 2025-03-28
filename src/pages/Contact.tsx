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
            <div className="hidden md:flex">
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
            </div>

            <Navbar />

            <div className={"relative md:px-24 md:mb-24 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440]"}>
                <img src={"src/assets/images/telephone.svg"} alt="Contact-us" className={"h-[250px] inset-0 brightness-50 md:h-[calc(100vh-135px)] max-h-[720px] w-full object-cover md:max-w-[635px]"}/>
                <div className="md:hidden absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
                <div className={"hidden md:block absolute z-10 bg-white h-[450px] w-[500px] ls:h-[450px] ls:w-[600px] xl:w-[700px] xl:h-[500px] transition-all duration-300 bottom-0 right-[9%] xl:right-[20%]"}>
                    <div className={"hidden md:block absolute space-y-24"}>
                        <div><h1 className={"font-primary absolute -top-[25%] right-0 text-xl font-bold text-light-gray"}>Contact</h1></div>
                        <hr className={"w-1/5 ml-12"}/>
                        <div className={"ml-12 space-y-4"}>
                            <h1 className={"font-primary font-bold text-6xl"}>Tell us about your project</h1>
                            <p className={"font-primary text-xsm text-medium-gray"}>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                        </div>
                    </div>
                </div>
            </div>
            <main className={"space-y-48 md:px-18 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440px]"}>
                <div className={"md:hidden container-body space-y-8"}>
                    <h1 className={"font-primary font-bold text-6xl"}>Tell us about your project</h1>
                    <p className={"font-primary text-xsm text-medium-gray"}>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                </div>

                <hr className={"w-1/3 container-in mt-24 mb-20 md:hidden" }/>

                <div className={"container-body space-y-16 ls:grid ls:grid-cols-[1fr1_1.5fr] ls:gap-48 w-full"}>
                    <div><h1 className={"font-primary font-bold text-md max-w-1/2"}>Contact Details</h1></div>

                    <div className={"space-y-8 md:grid md:grid-cols-2 md:gap-6"}>
                        {contact.map(contact => (
                            <div className={"text-xsm font-primary space-y-8"}>
                                <div className={"text-light-gray font-bold"}>{contact.office}</div>

                                <div className={"space-y-8 md:flex md:justify-between md:flex-col md:space-y-16"}>
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
                    <div><h1 className={"font-primary font-bold text-md pb-20 max-w-3/4"}>Connect with us</h1></div>

                    <div className={"container-body "}>
                        <form className={""}>
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
            <Footer />
            </main>
    )
}
export default Contact;


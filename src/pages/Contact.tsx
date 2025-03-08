import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import {ArrowRight} from "lucide-react";

interface ContactProps{
    office: string;
    mail: string;
    address: string;
    phone: number;
}

const contact: ContactProps[] = [
    { office: "Main Office", mail: "archone@mail.com", address: "1892  Chenoweth Drive TN", phone: 123-456-3451, },
    { office: "Office II", mail: "archtwo@mail.com", address: "3399  Wines Lane TX", phone: 832-123-4321, },
];

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className={"relative"}>
                <img src={"src/assets/images/telephone.svg"} alt="Contact-us" className={"h-[375px] w-full object-cover"}/>
                <div className="absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
            </div>
            <main className={"space-y-48"}>
                <div className={"container-body space-y-8"}>
                    <h1 className={"font-primary font-bold text-6xl"}>Tell us about your project</h1>
                    <p className={"font-primary text-xsm text-medium-gray"}>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                </div>

                <hr className={"w-1/3 container-in mt-24 mb-20" }/>

                <div className={"container-body space-y-16"}>
                    <h1 className={"font-primary font-bold text-md"}>Contact Details</h1>

                    {contact.map(contact => (
                        <div className={"text-xsm font-primary space-y-8"}>
                            <div className={"text-light-gray font-bold"}>{contact.office}</div>

                            <div>
                                <p>{contact.mail}</p>
                                <p>{contact.address}</p>
                                <p>{contact.phone}</p>
                            </div>

                            <div className={"font-primary font-bold"}>
                                <button className={"flex gap-x-6"}>View on Map <ArrowRight /></button>
                            </div>
                        </div>
                    ))}
                </div>

                <img src={"src/assets/images/Maps.svg"} alt={"Maps"} className={"w-full h-auto"} />

                <div className={"container-body"}>
                    <h1 className={"font-primary font-bold text-md pb-20"}>Connect with us</h1>

                    <form className={"flex flex-col gap-y-8"}>
                        <input type={"text"} id={"name"} placeholder={"Name"} className={"px-4 focus:outline-hidden text-black placeholder: font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                        <hr className="border-t-[2px]" />
                        <input type={"text"} id={"name"} placeholder={"Email"} className={"px-4 focus:outline-hidden placeholder: font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                        <hr className="border-t-[2px]" />
                        <input type={"text"} id={"name"} placeholder={"Message"} className={"px-4 focus:outline-hidden placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"}/>
                        <hr className="border-t-[2px]" />
                    </form>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-black text-white p-4 w-16 h-16 flex items-center justify-center" >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
            </>
    )
}
export default Contact;


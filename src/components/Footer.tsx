import archMobile from "../assets/images/arch-mobile.svg";
import {ArrowRight} from "lucide-react";


const Footer = () => {
    return (
        <>
            <div className="flex flex-col md:hidden pt-40 relative items-center font-primary ">
                <div className="relative bg-light-gray pb-12 w-full flex justify-center">
                    <img
                        src={archMobile}
                        alt="arch-mobile "
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="flex flex-col items-center justify-center pt-24 text-xsm text-dark-gray text-center space-y-10 font-bold font-spartan">
                        <button className="block">Portfolio</button>
                        <button className="block">About Us</button>
                        <button className="block">Contact</button>
                        <button className="flex items-center justify center font-spartan mt-5 font-bold border border-black bg-black text-white pl-12 pr-8 py-5  w-full">
                            See Our Portfolio
                            <ArrowRight className={"ml-5"}/>
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Footer;

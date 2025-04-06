import { motion } from "framer-motion";
import {ArrowRight} from "lucide-react";

const ProjectPages = ({ src, alt, title, content }: any) => {
    return (
        <>
            <div className="relative hidden lg:block ">
                <div className="">
                    <img  src={src}  alt={alt} className={"w-full h-[calc(100vh-135px)] max-h-[800px] object-cover brightness-75"}/>
                </div>

                <motion.div data-aos="fade-zoom-in" data-aos-offset="600" data-aos-easing="ease-in-sine" data-aos-duration="600" className="absolute inset-1 flex flex-col justify-center md:pl-8 lg:pl-32 lg:w-[700px] space-y-6">
                    <h1 className="text-white text-[clamp(5rem,9.14vw+1rem,6.5rem)] leading-[clamp(4.3rem,10.3vw+1.2rem,5.1rem)] font-primary">
                        {title}
                    </h1>
                    <h1 className="text-white font-primary font-medium lg:w-[600px] text-[clamp(0.5rem,5.14vw+1rem,1.5rem)] leading-[clamp(1.1rem,10.3vw+1.2rem,2.15rem)]">
                        {content}
                    </h1>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button mt-10 font-primary max-w-[300px]">
                        See Our Portfolio <ArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
};

export default ProjectPages;


import { motion } from "framer-motion";
import {ArrowRight} from "lucide-react";

const ProjectPages = ({ src, alt, title, content }: any) => {
    return (
        <>
            <div className="relative hidden lg:block ">
                <div className="">
                    <img  src={src}  alt={alt} className={"w-full h-[calc(100vh-135px)] max-h-[800px] object-cover brightness-75"}/>
                </div>

                <div className="absolute inset-1 flex flex-col justify-center md:pl-8 lg:pl-32 lg:w-[700px] space-y-6">
                    <motion.h1
                        animate={{ y: [-150, -20] }}
                        transition={{
                            type: "spring",
                            bounce: 0.05,
                            duration: 2,
                            delay: 0.1,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        className="text-white text-lg leading-20 font-primary  font-bold"
                    >
                        {title}
                    </motion.h1>
                    <motion.h1
                        animate={{ y: [-150, -20] }}
                        transition={{
                            type: "spring",
                            bounce: 0.05,
                            duration: 2,
                            delay: 0.1,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        className="text-white font-primary font-medium lg:w-[600px] text-xsm"
                    >
                        {content}
                    </motion.h1>
                    <button className="button mt-10 font-primary max-w-[300px]">
                        See Our Portfolio <ArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectPages;

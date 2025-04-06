import { motion } from "framer-motion";

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } }
};

// const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

const PortfolioProjects = ({src, label, date}: any) => {
    return (
        <>
            <motion.div  className="relative">
                <motion.img variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} src={src} alt="portfolio projects" className="w-full h-[250px] ls:h-[40rem] object-cover brightness-75" />
                <div className="container-in absolute inset-0 flex flex-col justify-end font-primary mb-6 ">
                    <h1 className="text-white text-sm font-bold">{label}</h1>
                    <p className="text-white text-xsm font-medium opacity-75">{date}</p>
                </div>
            </motion.div>
        </>
    )
}
export default PortfolioProjects

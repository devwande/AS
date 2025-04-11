"use client"

import { useEffect } from "react"
import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import PortfolioProjects from "../components/PortfolioProjects.tsx"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

interface Portfolio {
    label: string
    src: string
    date: string
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            staggerChildren: 0.4,
        },
    },
}

const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            mirror: false,
            offset: 50,
        })
    }, [])

    const projects: Portfolio[] = [
        { src: "src/assets/images/seraph.svg", label: "Seraph Station", date: "September 2019" },
        { src: "src/assets/images/eebox.svg", label: "Eebox Building", date: "August 2017" },
        { src: "src/assets/images/federal.svg", label: "Federal II Tower", date: "March 2017" },
        { src: "src/assets/images/de-sol.webp", label: "Project Del Sol", date: "January 2016" },
        { src: "src/assets/images/prototype.svg", label: "Le Prototype", date: "October 2015" },
        { src: "src/assets/images/228B.svg", label: "228B Tower", date: "April 2015" },
        { src: "src/assets/images/grand.svg", label: "Grand Edelweiss Hotel", date: "December 2013" },
        { src: "src/assets/images/Netcry.svg", label: "Netcry Tower", date: "August 2012" },
        { src: "src/assets/images/Hypers.svg", label: "Hypers", date: "January 2012" },
        { src: "src/assets/images/SXIV.svg", label: "SXIV Tower", date: "March 2011" },
        { src: "src/assets/images/Trinity.svg", label: "Trinity Bank Tower", date: "September 2010" },
        { src: "src/assets/images/paramour.webp", label: "Project Paramour", date: "February 2008" },
    ]

    return (
        <main className={"max-w-[1440px] w-full mx-auto relative"}>
            <div className=" hidden md:flex ">
                <div className="absolute top-0 left-12">
                    <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-medium-gray rotate-90 tracking-[18px] mt-[158px] -ml-[130px] font-primary text-xsm "
                    >
                        {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((letter, index) => (
                            <motion.span key={index} variants={itemVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Navbar />

            <div className="px-4 md:px-24 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={100 + (index % 6) * 100} data-aos-duration={800}>
                            <PortfolioProjects src={project.src} label={project.label} date={project.date} alt={project.label} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={"space-y-0 max-w-[570px] mx-auto md:max-w-full xl:max-w-[1440px] md:px-24"}>

            <Footer />

            </div>
        </main>
    )
}

export default Portfolio

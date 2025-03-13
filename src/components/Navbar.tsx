import arch from "../assets/icons/arch.svg"
import {motion, useCycle, AnimatePresence, MotionConfig} from "framer-motion";
import {useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (mobileNav) {
                toggleMobileNav();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                toggleMobileNav();
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileNav]);

    return (
        <>
            <div className="flex justify-between relative md:hidden container-body">
                <div><img src={arch} alt="Arch" /></div>
                <div><motion.button
                    animate={mobileNav ? "open" : "closed"}
                    ref={buttonRef}
                    onClick={() => toggleMobileNav()}
                    className="w-full flex flex-col space-y-1.5 py-4"
                >
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 8 },
                        }}
                        className="w-7 h-0.5 bg-black block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        className="w-7 h-0.5 bg-black block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -8 },
                        }}
                        className="w-7 h-0.5 bg-black block"
                    ></motion.span>
                </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {mobileNav && (
                    <MotionConfig
                        transition={{
                            type: "spring",
                            bounce: 0.099,
                        }}
                    >
                        <motion.div
                            variants={{
                                open: {
                                    x: "0%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0.099,
                                        when: "beforeChildren",
                                    },
                                },
                                closed: {
                                    x: "100%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0.099,
                                        when: "afterChildren",
                                    },
                                },
                            }}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            ref={menuRef}
                            className="md:hidden space-y-20 h-1/2 flex flex-col fixed right-0 w-5/6 bg-light-gray py-10 z-20"
                        >
                            <motion.button
                                variants={{
                                    open: {
                                        y: "0%",
                                        opacity: 1,
                                    },
                                    closed: {
                                        y: "25%",
                                        opacity: 0,
                                    },
                                }}
                                className="flex justify-start pl-8 text-sm font-primary font-bold"
                                onClick={() => navigate("/portfolio")}
                            >
                                Portfolio
                            </motion.button>
                            <motion.button
                                variants={{
                                    open: {
                                        y: "0%",
                                        opacity: 1,
                                    },
                                    closed: {
                                        y: "25%",
                                        opacity: 0,
                                    },
                                }}
                                className="flex justify-start pl-8 text-sm font-primary font-bold"
                                onClick={() => navigate("/about")}
                            >
                                About Us
                            </motion.button>
                            <motion.button
                                variants={{
                                    open: {
                                        y: "0%",
                                        opacity: 1,
                                    },
                                    closed: {
                                        y: "25%",
                                        opacity: 0,
                                    },
                                }}
                                className="flex justify-start pl-8 text-sm font-primary font-bold"
                                onClick={() => navigate("/contact")}
                            >
                                Contact
                            </motion.button>
                        </motion.div>
                    </MotionConfig>
                )}
            </AnimatePresence>

            {/* DESKTOP NAVBAR */}
            <main className={"max-w-[1440px] hidden md:block w-full mx-auto md:px-24 relative"}>

                <div className="md:py-12 flex justify-start space-x-20 items-center max-w-[calc(570px+46px)] md:max-w-[1110px] md:mx-0 mx-auto relative font-primary font-bold font-xsm text-medium-gray">
                    <img src={"src/assets/icons/arch.svg"} alt="Arch" />
                    <button>Portfolio</button>
                    <button>Contact</button>
                    <button>Contact Us</button>
                </div>
            </main>
        </>
    )
}
export default Navbar

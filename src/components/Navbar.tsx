import arch from "../assets/icons/arch.svg"
import {motion, useCycle} from "framer-motion";
import {useRef} from "react";

const Navbar = () => {

    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    // const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

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
        </>
    )
}
export default Navbar

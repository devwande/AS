import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: any) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === to;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-xsm font-bold hover:text-black"
            onClick={() => navigate(to)}
        >
            <span className={`hover-underline ${isActive ? 'active-underline' : ''}`}>{children}</span>
            <style>{`
                .hover-underline::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0;
                    height: 2px;
                    width: 0;
                    background-color: black;
                    transition: width 0.3s;
                }
                .hover-underline:hover::after {
                    width: 50%;
                }
                .active-underline::after {
                    width: 50%;
                }
            `}</style>
        </motion.button>
    );
};

export default NavLink;

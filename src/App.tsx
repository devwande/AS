import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx"
import Portfolio from "./pages/Portfolio.tsx";
import About from "./pages/About.tsx"
import Contact from "./pages/Contact.tsx";
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        Aos.init({ once:true });
    }, [])
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;
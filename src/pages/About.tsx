import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";


const About = () => {
    return (
        <>
            <Navbar/>


            <div className={"relative"}>
                <img src={"src/assets/images/about.svg"} alt="about" className={"h-[375px] w-full object-cover"}/>
                <div className="absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
            </div>
            <main className={"space-y-48"}>
            <div className={"container-body space-y-8"}>
                <h1 className={"font-primary font-bold text-6xl"}>Your team of professionals</h1>
                <p className={"font-primary text-2xl text-medium-gray"}>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
            </div>

            <hr className={"w-1/3 container-in mt-24 mb-20" }/>

            <div className={"container-body space-y-8 "}>
                <h1 className={"font-primary font-bold text-md"}>Our Heritage</h1>
                <p className={"font-primary text-2xl text-medium-gray"}>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                <p className={"font-primary text-2xl text-medium-gray"}>Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
                <p className={"font-primary text-2xl text-medium-gray"}>Our small team of world-class professionals provides input on every project.</p>
            </div>

            <div className={"container-body space-y-12 "}>
               <h1 className={"font-primary font-bold text-md"}>The Leaders</h1>
                <div className={"space-y-12"}>
                    <div className={"font-primary"}>
                        <img src={"src/assets/images/Jake.svg"} alt={"Jake"} className={"w-full"}/>
                        <h1 className={"text-sm font-bold"}>Jake Richards</h1>
                        <p className={"text-xsm text-dark-gray"}>Chief Architect</p>
                    </div>

                    <div className={"font-primary"}>
                        <img src={"src/assets/images/thompson.svg"} alt={"Thompson"} className={"w-full"}/>
                        <h1 className={"text-sm font-bold"}>Thompson Smith</h1>
                        <p className={"text-xsm text-dark-gray"}>Head of finance</p>
                    </div>

                    <div className={"font-primary"}>
                        <img src={"src/assets/images/jackson.svg"} alt={"Jackson"} className={"w-full"}/>
                        <h1 className={"text-sm font-bold"}>Jackson Rouke</h1>
                        <p className={"text-xsm text-dark-gray"}>Lead Designer</p>
                    </div>

                    <div className={"font-primary"}>
                        <img src={"src/assets/images/Maria.svg"} alt={"Maria"} className={"w-full"}/>
                        <h1 className={"text-sm font-bold"}>Maria Simpson</h1>
                        <p className={"text-xsm text-dark-gray"}>Senior Architect</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer/>
        </>
    )
}
export default About

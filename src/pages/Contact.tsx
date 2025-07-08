"use client"

import { useEffect } from "react"
import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Telephone from "../assets/images/telephone.svg"
import Maps from "../assets/images/Maps.svg"

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

interface ContactProps {
  office: string
  mail: string
  address: string
  phone: string
}

const contact: ContactProps[] = [
  { office: "Main Office", mail: "archone@mail.com", address: "1892  Chenoweth Drive TN", phone: "123-456-3451" },
  { office: "Office II", mail: "archtwo@mail.com", address: "3399  Wines Lane TX", phone: "832-123-4321" },
]

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
      offset: 50,
    })
  }, [])

  return (
    <main className={"max-w-[1440px] w-full mx-auto relative"}>
      <section className="hidden md:flex">
        <div className="absolute top-0 left-12">
          <hr className="top-0 left-16 w-[1px] h-24 bg-medium-gray transform translate-x-0 translate-y-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-medium-gray rotate-90 tracking-[18px] mt-[135px] -ml-[104px] font-primary text-xsm "
          >
            {["C", "O", "N", "T", "A", "C", "T"].map((letter, index) => (
              <motion.span key={index} variants={itemVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <Navbar />

      <section className={"relative md:px-24 md:mb-24 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440]"}>
        <img
          src={Telephone || "/placeholder.svg"}
          alt="Contact-us"
          className={
            "h-[250px] inset-0 brightness-50 md:h-[calc(100vh-135px)] max-h-[780px] w-full object-cover object-right-bottom md:max-w-[650px]"
          }
          data-aos="fade-in"
          data-aos-duration="1200"
          loading="eager"
          decoding="async"
        />
        <div className="md:hidden absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]"></div>
        <div
          className={
            "hidden md:block absolute mr-auto z-10 bg-white h-[450px] w-[500px] ls:h-[450px] ls:w-[600px] xl:w-[700px] xl:h-[500px] transition-all duration-300 bottom-0 right-[9%] xl:right-[10%]"
          }
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className={"hidden md:block absolute space-y-28 "}>
            <div>
              <h1
                className={
                  "font-primary absolute -top-[25%] right-0 ls:right-5 ls:-top-[35%] font-bold text-light-gray text-[clamp(8.5rem,15.5vw+1.3rem,12.635rem)] tracking-[0.125rem]"
                }
                data-aos="fade-in"
                data-aos-delay="300"
              >
                Contact
              </h1>
            </div>
            <hr className={"w-1/5 ml-12"} data-aos="fade-right" data-aos-delay="400" />
            <div className={"ml-12 space-y-4 xl:space-y-8 md:mr-auto"}>
              <h1
                className={"font-primary font-bold text-[4.5rem] leading-[64px]"}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Tell us about <br />
                your project
              </h1>
              <p className={"font-primary text-xsm text-medium-gray"} data-aos="fade-up" data-aos-delay="600">
                We'd love to hear more about your project. Please, leave a message below or give us a call. We have two
                offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className={"space-y-12 md:px-18 max-w-[570px] md:max-w-full mx-auto xl:max-w-[1440px]"}>
        <div className={"md:hidden container-body space-y-8"} data-aos="fade-up" data-aos-duration="800">
          <h1 className={"font-primary font-bold text-6xl"}>
            Tell us about <br />
            your project
          </h1>
          <p className={"font-primary text-xsm text-medium-gray"}>
            We'd love to hear more about your project. Please, leave a message below or give us a call. We have two
            offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>

        <hr className={"w-1/3 container-in mt-24 mb-20 md:hidden"} data-aos="fade-right" data-aos-duration="600" />

        <div className={"container-body space-y-16 ld:grid ld:grid-cols-[0.8fr_1.5fr] ls:gap-48 w-full"}>
          <div data-aos="fade-right" data-aos-duration="800">
            <h1
              className={
                "font-primary text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap "
              }
            >
              Contact <br /> Details
            </h1>
          </div>

          <div className={"space-y-8 md:grid md:grid-cols-2 md:gap-16"}>
            {contact.map((contact, index) => (
              <div
                key={contact.office}
                className={"text-xsm font-primary space-y-8 whitespace-nowrap md:ml-auto"}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200}
              >
                <div className={"text-light-gray font-bold"} data-aos="fade-right" data-aos-delay={index * 200 + 100}>
                  {contact.office}
                </div>

                <div
                  className={"space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-48 md:grid-cols-1 w-fit "}
                  data-aos="fade-up"
                  data-aos-delay={index * 200 + 200}
                >
                  <div>
                    <p>Mail: {contact.mail}</p>
                    <p>Address: {contact.address}</p>
                    <p>Phone: {contact.phone}</p>
                  </div>

                  <div
                    className={"font-primary font-bold"}
                    data-aos="fade-left"
                    data-aos-delay={index * 200 + 300}
                    data-aos-offset="0"
                  >
                    <button className={"flex gap-x-6"}>
                      View on Map <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src={Maps || "/placeholder.svg"}
          alt={"Maps"}
          className={"w-full object-cover transition-all duration-300 h-[400px]"}
          data-aos="zoom-in"
          data-aos-duration="1000"
          loading="lazy"
          decoding="async"
        />

        <div className={"container-body ls:grid ls:grid-cols-[1fr_1.5fr]"}>
          <div data-aos="fade-right" data-aos-duration="800">
            <h1 className={"font-primary font-bold text-md pb-20 "}>
              Connect <br />
              with us
            </h1>
          </div>

          <div className={"container-body"} data-aos="fade-up" data-aos-duration="1000">
            <form className={"font-primary text-2xl"}>
              <div className={"flex flex-col gap-y-12"}>
                <input
                  type={"text"}
                  id={"name"}
                  placeholder={"Name"}
                  className={
                    "px-4 focus:outline-hidden text-black placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"
                  }
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                />
                <hr className="border-t-[3px]" data-aos="fade-right" data-aos-duration="400" data-aos-delay="150" />
                <input
                  type={"text"}
                  id={"name"}
                  placeholder={"Email"}
                  className={
                    "px-4 focus:outline-hidden placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"
                  }
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="200"
                />
                <hr className="border-t-[3px]" data-aos="fade-right" data-aos-duration="400" data-aos-delay="250" />
                <input
                  type={"text"}
                  id={"name"}
                  placeholder={"Message"}
                  className={
                    "px-4 focus:outline-hidden placeholder:font-primary placeholder:text-2xl placeholder:font-bold placeholder:text-medium-gray"
                  }
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="300"
                />
                <hr className="border-t-[3px]" data-aos="fade-right" data-aos-duration="400" data-aos-delay="350" />
              </div>
              <div className="flex justify-end" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <button
                  type="submit"
                  className="bg-black text-white p-4 w-16 h-16 flex items-center justify-center"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="500"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </main>
  )
}
export default Contact

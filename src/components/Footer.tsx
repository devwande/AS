import archMobile from "../assets/images/arch-mobile.svg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/*MOBILE FOOTER*/}
      <footer className="max-w-[686px] mx-auto flex flex-col ls:hidden pt-40 relative items-center font-primary">
        <div className="relative bg-light-gray pb-12 w-full flex justify-center">
          <img
            src={archMobile}
            alt="arch-mobile"
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col items-center justify-center pt-24 text-xsm text-dark-gray text-center space-y-10 font-bold font-primary">
            <button onClick={() => navigate("/portfolio")}>Portfolio</button>
            <button onClick={() => navigate("/about")}>About Us</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
            <button className="flex items-center justify center font-primary mt-5 font-bold border border-black bg-black text-white pl-12 pr-8 py-5  w-full">
              See Our Portfolio
              <ArrowRight className={"ml-5"} />
            </button>
          </div>
        </div>
      </footer>

      {/*DESKTOP FOOTER*/}
      <footer className="hidden ls:flex justify-center">
        <div className="flex w-screen max-w-[1440px] mt-32 px-6 md:px-24">
          <div className="flex w-screen min-w-[86%] xl:min-w-[91%] max-w-[1440px] bg-light-gray space-x-10 text-xsm text-medium-gray font-primary font-bold items-center">
            <img
              src={archMobile}
              alt="arch-mobile"
              onClick={() => navigate("/")}
              className=""
            />
            <button
              className="hover:text-black whitespace-nowrap"
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className="hover:text-black whitespace-nowrap"
              onClick={() => navigate("/about")}
            >
              About Us
            </button>
            <button
              className="hover:text-black whitespace-nowrap"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>

          <div className="flex w-[30%] items-center -translate-x-28">
            <button
              className="border flex font-bold border-black w-full bg-black text-white px-6 py-5 gap-x-5 font-primary items-center justify-center whitespace-nowrap "
              onClick={() => navigate("/portfolio")}
            >
              See our Portfolio
              <ArrowRight />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

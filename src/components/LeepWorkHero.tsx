import LeepHeader from "@/components/LeepHeader";
import HeroBg from "../assets/man.png"; 
import { motion } from 'framer-motion';
import ArrowPrevious from "../assets/Arrow-previous.png";
import ArrowNext from "../assets/Arrow-next.png"; 
import { Link } from "react-router-dom";

const LeepWorkHero = () => {
    return (
        <>
            <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }}
                className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden w-full"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, .5)), url(${HeroBg})`,
                backgroundColor: "#1E1E1E80",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <LeepHeader />  

            <div className="hero-container flex flex-col h-4/5 md:w-2/3 md:m-auto gap-4 px-4 justify-center">
                <h2 className="font-bold text-3xl lg:text-6xl text-white md:leading-relaxed leading-snug">Global Remote <span style={{ color: "#FFBF4D" }}>Work</span> <br /> Initiative - Digital <br /> Nomads </h2>
                <p style={{ lineHeight: "33.82px", fontSize: "21px", fontWeight: 400, color: "hsla(0, 0%, 100%, 1)" }}>
                As remote work becomes a permanent fixture of the global job market, LEEP 
aims to position Nigerian talent at the forefront of this revolution through this initiative 
                </p>
                <div className="flex gap-4 items-center">
                    <span className="px-4 py-2 rounded-md" style={{ backgroundColor: "#009444" }}>
                        <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                    </span>
                </div>
                <div className="direction flex justify-between py-16">
                    <Link to="/">
                        <div className="flex flex-col items-center">
                            <p className="text-white">Previous</p>
                            <img  src={ArrowPrevious} alt="Previous" />
                        </div>
                    </Link>
                    <Link to="/vep">
                        <div className="flex flex-col items-center">
                            <p className="text-white">Next</p>
                            <img src={ArrowNext} alt="Next" />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>   
        </>
    );
};

export default LeepWorkHero;
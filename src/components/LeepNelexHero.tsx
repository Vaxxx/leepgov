 
import { Link } from 'react-router-dom'; 
import LeepHeader from "@/components/LeepHeader";
import HeroBg from "../assets/nelex_hero.png";
 
import { motion } from 'framer-motion'; 
import ArrowPrevious from "../assets/Arrow-previous.png";
import ArrowNext from "../assets/Arrow-next.png";
const LeepNelexHero = () => {
    return (
        <div>
              <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }}
                className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundimg: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, .5)), url(${HeroBg})`,
                backgroundColor: "#1E1E1E80"
            }}>
            <LeepHeader /> 
            <div className="hero-container flex flex-col h-full justify-center md:w-2/3 md:m-auto gap-8 px-4">
                <h2 className="font-bold text-3xl leading-snug lg:text-6xl text-white md:leading-relaxed">National Electronic Labour <br /> Exchange -  <span style={{ color: "#FFBF4D" }}>NELEX</span></h2>
                <p style={{ lineHeight: "33.82px", fontSize: "21px", fontWeight: 400, color: "hsla(0, 0%, 100%, 1)" }}>
                    At the heart of LEEP is NELEX platform. This digital ecosystem will be expanded 
                    and upgraded to become Nigeria’s central hub for employment 
                    recruitment and management.
                </p>
                <div className="flex gap-4 items-center">
                    <span className="px-4 py-2 rounded-md" style={{ backgroundColor: "#009444" }}>
                        <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                    </span>
                </div>
                <div className="direction flex justify-between py-16">
                    <Link to="/vep">
                        <div className="flex flex-col items-center">
                            <p className="text-white">Previous</p>
                            <img src={ArrowPrevious} alt="Previous" />
                        </div>
                    </Link>
                    <Link to="/fairs">
                        <div className="flex flex-col items-center">
                            <p className="text-white">Next</p>
                            <img src={ArrowNext} alt="Next" />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default LeepNelexHero;
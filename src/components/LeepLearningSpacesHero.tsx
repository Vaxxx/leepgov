import { motion } from "framer-motion"; 
import WorkDigital from "../assets/work-digital.jpeg";
import ArrowPrevious from "../assets/Arrow-previous.png";
import ArrowNext from "../assets/Arrow-next.png";
import LeepHeader from "./LeepHeader";
import { Link } from "react-router-dom";

const LeepLearningSpacesHero = () => {
    return (
        <div>
            <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }}
                className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, .5)), url(${WorkDigital})`,
                backgroundColor: "#1E1E1E80"
            }}>
            <LeepHeader /> 
            <div className="hero-container flex flex-col h-4/5 justify-center md:w-2/3 md:m-auto gap-8 px-4">
                <h2 className="font-bold text-3xl leading-snug lg:text-6xl text-white md:leading-relaxed">Center for Learning  <span style={{ color: "#FFBF4D" }}>Spaces</span></h2>
                <p style={{ lineHeight: "33.82px", fontSize: "21px", fontWeight: 400, color: "hsla(0, 0%, 100%, 1)" }}>
                Empowering Nigeria’s <span style={{ color: "hsla(148, 100%, 29%, 1)" }}>workforce</span> through upgraded, modern learning hubs for training, apprenticeships, and business incubation. 
                </p>
                <div className="flex gap-4 items-center">
                    <span className="px-4 py-2 rounded-md" style={{ backgroundColor: "#009444" }}>
                        <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                    </span>
                </div>
                <div className="direction flex justify-between py-16">
                    <Link to="/fairs">
                        <div className="flex flex-col items-center">
                            <p className="text-white">Previous</p>
                            <img src={ArrowPrevious} alt="Previous" />
                        </div>
                    </Link>
                    <Link to="/">
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

export default LeepLearningSpacesHero;
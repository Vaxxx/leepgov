import { Link } from "react-router-dom";
import NextBg from "../assets/next-step-bg.jpeg"; 
import { motion } from "framer-motion";

const JoinFreeSection = () => {
    return (
        <div>
             <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }} className="next-step-bg my-6 lg:flex lg:justify-between lg:items-center lg:m-auto lg:gap-6 lg:my-8">
            <img src={NextBg} alt="Next Step" width={500} height={300} />
            <div className="lg:w-2/4 lg:m-auto">
                <p className="font-bold text-xl my-6 lg:text-5xl lg:leading-snug">
                    Take the next step toward your personal and professional goals 
                    with <span style={{ color: "hsla(148, 100%, 29%, 1)" }}>LEEP</span>.
                </p>
                <p className="my-6" style={{ color: "hsla(0, 0%, 12%, 1)" }}>
                    Join now and explore several offerings from our curated Certification Programs.
                </p>
                <span className="px-4 py-2 lg:rounded-md" style={{ backgroundColor: "#009444" }}>
                    <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Join for Free</Link>
                </span>
            </div>
        </motion.div>
        </div>
    );
};

export default JoinFreeSection;
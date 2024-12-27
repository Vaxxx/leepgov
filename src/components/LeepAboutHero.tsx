import LeepHeader from "@/components/LeepHeader";
import AboutHeroBg from "../assets/about-img-hero.jpeg";
import { motion } from 'framer-motion';

const LeepAboutHero = () => {
    return (
        <>
          <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }}
                className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, .5)), url(${AboutHeroBg})`,
                backgroundColor: "#1E1E1E80",
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
            <LeepHeader /> 
            <div className="hero-container flex flex-col h-2/3 justify-center md:w-2/3 md:m-auto gap-4 px-4">
                
            </div>
        </motion.div>   
        </>
    );
};

export default LeepAboutHero;
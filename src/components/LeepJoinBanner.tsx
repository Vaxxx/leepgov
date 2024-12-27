import CoatofArms from '../assets/coat-of-arms-img.png';
import RenewedHopeBg from "../assets/renewed-hope-up.png";
import LeepImage from "../assets/leep-logo-img.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LeepJoinBanner() {
    return (
        <motion.section variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }} className="leep-join-banner min-h-48 md:min-h-64 flex">
            <article className="p-4 flex flex-col items-center justify-around lg:flex lg:flex-row lg:w-4/5 lg:m-auto lg:justify-between w-full">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-8 w-full">
                    <div className="flex items-center justify-between md:justify-start lg:grow lg:gap-16 w-full">
                        <img src={CoatofArms} className="object-contain md:w-28 lg:w-36 w-20" alt="Federal Gov. and Labour Ministry Empowerment" />
                        <img src={LeepImage}  className="object-contain md:w-28 lg:w-36 w-20" alt="Leep Image" />
                        <img src={RenewedHopeBg} className="object-contain md:w-28 lg:w-36 w-20 lg:mt-5" alt="Renewed Hope" />
                    </div>
                    <div className="lg:flex-none">
                        <span className="px-4 py-2 my-8 rounded-md" style={{ backgroundColor: "#009444" }}>
                            <Link to="/join" className="font-bold text-xl" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                        </span>
                    </div>
                    
                </div>
                
            </article>
        </motion.section>
    )
}
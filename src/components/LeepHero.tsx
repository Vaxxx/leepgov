import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import HeroBg from "../assets/leep-hero-bg.jpeg";
import LeepHeader from './LeepHeader';
// import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';

const LeepHero = () => {
    return (
        <>
            <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }}
                className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, .5)), url(${HeroBg})`,
                backgroundColor: "#1E1E1E80"
            }}>
            <LeepHeader />
            <div className="-z-10 hero-container flex flex-col h-2/3 justify-center md:w-2/3 md:m-auto gap-6 px-4">
                <h2 className="font-bold text-3xl leading-10 lg:text-6xl text-white">Transform your future<br /> with <span className="font-bold" style={{ color: "#FFBF4D" }}>
                    {/* <Typical steps={['LEEP', 2000, '', 2000]} loop={Infinity} wrapper="span" />
                     */}
                    <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                     '',
                                    1000, // 
                                     'L',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'LE',
                                    1000,
                                    'LEE',
                                    1000,
                                    'LEEP',
                                    1000
                                                                
                                ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                       />


                    </span></h2>
                    {/* <Typical steps={['LEEP', 2000, '', 2000]} loop={Infinity} wrapper="span" /></span></h2> */}
                <div style={{ lineHeight: "33.82px", fontSize: "21px", letterSpacing:"2%", fontWeight: 400, color: "hsla(0, 0%, 100%, 1)" }}>
                    Welcome to the official website of the Labour Employment and Empowerment program...<br />
                    <p className="font-bold">A <span style={{ color: "#009444" }}>renewed hope</span> initiative</p>
                </div>
                <div className="md:flex flex-col gap-4 md:items-center md:flex-row inline-block">
                  
                    <span className="px-4 py-2 rounded-md" style={{ backgroundColor: "#009444" }}>
                        <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                    </span>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default LeepHero;
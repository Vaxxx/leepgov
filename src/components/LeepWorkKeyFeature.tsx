import WorkDigital from "../assets/work-digital.jpeg";
import Geek from "../assets/geek.png";
import Library from "../assets/library.png";
import Globe from "../assets/globe.png"; 
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const LeepWorkKeyFeature = () => {
    return (
        <>
            <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="why-leep min-h-dvh md:min-h-screen flex justify-items-between py-8 lg:my-24 px-2 lg:p-4">
            <article className="lg:px-40">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    <span className="ellipse absolute -ml-2 -mt-4 -z-10"></span>KEY FEATURES
                </h2>

                <div className="grid grid-cols-1 gap-6 justify-items-center px-30">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={WorkDigital} alt="TRAINING & UPSKILLING" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4">TRAINING AND UPSKILLING</h3>
                            <p className="text-gray-600 md:text-2xl text-xl text-start">
                                LEEP will provide digital literacy training in areas like data analysis, software
                                development, call center management, and virtual assistance.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4">JOB PLACEMENT</h3>
                            <p className="text-gray-600 md:text-2xl text-xl text-start">
                                By establishing partnerships with international companies,
                                LEEP will connect skilled Nigerians with remote work
                                opportunities in industries such as customer service,
                                tech support, transcription, and content moderation.
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Geek} alt="JOB PLACEMENT" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Library} alt="C0-WORKING STRUCTURE" className="object-cover w-full h-full rounded-full" />
                        </div>
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4">C0-WORKING STRUCTURE</h3>
                            <p className="text-gray-600 md:text-2xl text-xl text-start">
                                Recognizing the need for infrastructure, this platform will double as co-working
                                spaces across Nigeria, offering fast internet, power and collaborative environments
                                for those pursuing remote jobs.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4">GLOBAL PARTNERSHIP</h3>
                            <p className="text-gray-600 md:text-2xl text-xl text-start">
                                LEEP will actively engage international businesses and freelancers’
                                platforms to create pipeline for Nigerian talent to enter the global
                                job market
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8 border-green-600 flex-shrink-0">
                            <img src={Globe} alt="National Reach" className="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>

                </div>
                <div className="px-4">
                    <h2 className="text-4xl font-bold text-center my-16 text-gray-900">
                        <span className="ellipse absolute ml-32 -mt-5 -z-10"></span>For Who?
                    </h2>
                    <p className="text-xl lg:text-2xl">This initiative is designed to offer employment to <span className="font-bold">1 million Nigerians</span>, focusing especially on youth, millennials, and Gen Z. Find out how you can work globally from home
                       <span className="font-bold"><Link to="/" style={{ color: "hsla(148, 100%, 29%, 1)" }}>[here]</Link>
                       </span>.
                    </p>
                </div>
            </article>
        </motion.section>
        </>
    );
};

export default LeepWorkKeyFeature;
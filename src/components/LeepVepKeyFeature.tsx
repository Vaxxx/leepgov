import Tractor from "../assets/tractor.png";
import Library from "../assets/library.png";
import EnterpreneurshipSupportImg from "../assets/enterpreneurship-support.jpeg"; 
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const LeepVepKeyFeature = () => {
    return (
        <div>
             <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="why-leep min-h-dvh md:min-h-screen flex justify-items-between  py-8 lg:my-24 px-2 lg:p-4">
            <article className=" lg:px-40">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    <span className="ellipse absolute -ml-4 -mt-4 -z-10"></span>KEY FEATURES
                </h2>

                <div className="grid grid-cols-1 gap-6 justify-items-center px-30">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Tractor} alt="SECTOR-SPECIFIC TRAINING" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">SECTOR-SPECIFIC TRAINING</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            LEEP’s VEP provides training in high demand industries, such as: <span className="font-bold">Agriculture, Clean Energy, 
                            Creative Arts, Construction</span> and <span className="font-bold">built environment</span> (plumbing, tiling, electrical, masonry & interlocking), <span className="font-bold">Hospitality, Home care, Facility Maintenance</span> (janitorial cleaning, AC maintenance, refrigerator repair,  and co.)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">ENTREPRENEURSHIP SUPPORT</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                                Beyond technical skills, <span className="font-bold" style={{ color: "hsla(148, 100%, 29%, 1)" }}>LEEP</span> offers <span className="font-bold">life skills and entrepreneurial training</span> designed to empower individuals to start and grow small businesses, especially in underserved communities. Our program equips participants with essential business knowledge—from financial literacy and strategic planning to marketing and customer relations—providing a strong foundation for sustainable entrepreneurship. By fostering innovation and self-reliance, <span className="font-bold">LEEP</span> helps aspiring entrepreneurs transform their ideas into thriving businesses, creating economic opportunities and contributing to community development.
                            </p>
                        </div>

                        {/* Image container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={EnterpreneurshipSupportImg} alt="ENTREPRENEURSHIP SUPPORT" className="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Library} alt="NATIONAL SKILLS QUALIFICATION FRAMEWORK (NSQF)" className="object-cover w-full h-full" />
                        </div>
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">NATIONAL SKILLS QUALIFICATION FRAMEWORK (NSQF)</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            Training will adhere to national and international standards, ensuring that certifications are 
                            recognized across industries, improving employability.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold my-11 text-gray-900">
                        <span className="ellipse absolute ml-16 -mt-5 -z-10"></span>How?
                    </h1>
                    <p>See how <span className="font-bold">VEP</span> can empower you with job-ready skills <span className="font-bold"><Link style={{ color: "hsla(148, 100%, 29%, 1)" }} to="/">[here]</Link></span>.</p>

                </div>
            </article>
        </motion.section>
        </div>
    );
};

export default LeepVepKeyFeature;
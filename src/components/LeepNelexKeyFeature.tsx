import Hands from "../assets/hands.png";
import Lady from "../assets/lady.png";
import Library from "../assets/library.png";
import Globe from "../assets/globe.png"; 
import { motion } from 'framer-motion';

const LeepNelexKeyFeature = () => {
    return (
        <div>
             <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="why-leep min-h-dvh md:min-h-screen flex justify-items-between  py-8 lg:my-24 px-2 lg:p-4">
            <article className=" lg:px-40">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    <span className="ellipse absolute -ml-1 -mt-4 -z-10"></span>KEY FEATURES
                </h2>

                <div className="grid grid-cols-1 gap-6 justify-items-center px-30">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Hands} alt="Job Matching" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">JOB MATCHING</h3>
                            <p className="text-gray-600 md:text-2xl text-base text-start">
                                NELEX connects job seekers with opportunities across
                                sectors, providing a transparent system where public
                                and private employers can list vacancies.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">JOB READY SKILLS</h3>
                            <p className="text-gray-600 md:text-2xl text-base text-start">
                                The platform will integrate features that support skill
                                development, offering online training modules and
                                certification options to help job seekers upgrade
                                their capabilities.
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Lady} alt="Job Ready Skills" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Library} alt="Resource Management" className="object-cover w-full h-full" />
                        </div>
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">RESOURCE MANAGEMENT</h3>
                            <p className="text-gray-600 md:text-2xl text-base text-start">
                            NELEX will track job applications, monitor employment status, and gather data to
ensure that program objectives are met, with automated reporting
 to stakeholders.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">NATIONAL REACH</h3>
                            <p className="text-gray-600 md:text-2xl text-base text-start">
                            Accessible to Nigerians in all 36 states and the FCT,
NELEX will serve as the backbone for LEEP’s goal of 
creating millions of jobs annually.
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8 border-green-600 flex-shrink-0">
                            <img src={Globe} alt="National Reach" className="object-cover w-full h-full" />
                        </div>
                    </div>

                </div>
            </article>
        </motion.section>
        </div>
    );
};

export default LeepNelexKeyFeature;
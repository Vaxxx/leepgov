import ApprenticeshipProgramimg from "../assets/tractor.png";
import BusinessIncubationGeek from "../assets/geek.png";
import CollaborativeEnvironment from "../assets/collaborative-environment.jpeg";
import NationwideAccess from "../assets/nationwide-access.jpeg"; 
import { motion } from 'framer-motion';

const LeepNelexCenterForLearningSpacesKeyFeature = () => {
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
                            <img src={ApprenticeshipProgramimg} alt="Job Matching" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">APPRENTICESHIP PROGRAMS</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                                The apprenticeship programs offer participants immersive, hands-on training experiences in a supportive learning environment. These <span className="font-bold">spaces</span> enable individuals to gain practical skills and insights through direct mentorship from industry experts. By bridging the gap between <span className="font-bold">theoretical knowledge and practical application</span>, these programs empower individuals to build confidence, enhance their capabilities, and prepare for successful careers in their chosen fields.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">BUSINESS INCUBATION HUBS</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                                Equipped with cutting-edge tools and technology, the centers will also support startups and small businesses, offering resources for product development and business scaling.
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={BusinessIncubationGeek} alt="Job Ready Skills" className="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-30">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={CollaborativeEnvironment} alt="Resource Management" className="object-cover w-full h-full rounded-full" />
                        </div>
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">COLLABORATIVE ENVIRONMENTS</h3>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                                <span className="font-bold" style={{ color: "hsla(148, 100%, 29%, 1)" }}>LEEP</span> aims to foster collaboration by providing shared workspaces for entrepreneurs, artisans, and vocational trainees. These spaces will serve as meeting points for creative and business minds.
                                to stakeholders.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-30">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 md:px-20 px-4">
                            <h3 className="text-2xl font-bold mb-4">NATIONWIDE ACCESS</h3>
                            <p className="text-gray-600 md:text-xl text-base">
                                With centers being modernized in multiple states, Nigerians from all regions will have access to world-class training facilities, ensuring inclusivity in the job creation drive.
                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8 border-green-600 flex-shrink-0">
                            <img src={NationwideAccess} alt="National Reach" className="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>

                </div>
            </article>
        </motion.section>
        </div>
    );
};

export default LeepNelexCenterForLearningSpacesKeyFeature;
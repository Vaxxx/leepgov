import Mentor from "../assets/mentor.png";
import Fair from "../assets/fair.png";
import Guru from "../assets/guru.png";
import Employ from "../assets/employ.png"; 
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const LeepFairsKeyFeature = () => {
    return (
        <>
                 <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="why-leep min-h-dvh md:min-h-screen flex justify-items-between  py-8 lg:my-24 px-2 lg:p-4">
            <article className="lg:w-4/5 lg:m-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    <span className="ellipse absolute -ml-3 -mt-4 -z-10"></span>KEY FEATURES
                </h2>

                <div className="grid grid-cols-1 gap-6 justify-items-center px-30">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left lg:gap-11">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Mentor} alt="EMPLOYMENT PARTICIPATION" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center gap-6 px-4">
                            <h1 className="lg:text-5xl text-xl font-bold mb-4">EMPLOYMENT PARTICIPATION</h1>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            To broaden employment prospects,  <span className="font-bold " style={{ color: "hsla(148, 100%, 29%, 1)" }}> LEEP </span> actively invites both <b> Nigerian companies and international firms </b>to participate in our program. This collaboration provides job seekers with a diverse range of opportunities across multiple industries, from local enterprises to global corporations.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left lg:gap-11">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 gap-6 px-4">
                            <h1 className="lg:text-5xl text-xl font-bold mb-4">WORKSHOPS AND SEMINARS</h1>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            Our <span className="font-bold " style={{ color: "hsla(148, 100%, 29%, 1)" }}>Workshops and Seminars</span> provide attendees with hands-on learning experiences designed to strengthen their job market readiness. Our <b>interview skills sessions</b> offer practical advice and mock interview practice to build confidence and polish communication techniques. Additionally, <b>personal branding workshops</b> guide attendees on crafting a unique professional identity that resonates with potential employers and sets them apart in a competitive job landscape.                            </p>
                        </div>

                        {/* img container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Fair} alt="WORKSHOPS AND SEMINARS" className="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left lg:gap-11">
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 md:mr-6 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Guru} alt="JOB MATCHING SERVICES" className="object-cover w-full h-full rounded-full" />
                        </div>
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center gap-6 px-4">
                            <h1 className="lg:text-5xl text-xl font-bold mb-4">JOB MATCHING SERVICES</h1>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            <b>LEEP</b>  leverages data from the <span className="font-bold " style={{ color: "hsla(148, 100%, 29%, 1)" }}>NELEX</span> platform to connect qualified candidates with suitable job opportunities. By identifying strong potential fits, this service enhances the likelihood of immediate placements, helping candidates secure positions that align with their career goals faster.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left lg:gap-11">
                        {/* Text container with centered alignment */}
                        <div className="flex flex-col justify-center md:mr-6 gap-6 px-4">
                            <h1 className="lg:text-5xl font-bold mb-4" style={{ color: "hsla(0, 0%, 12%, 1)" }}>ADDITIONAL EMPLOYABILITY CAMPUS ACTIVITIES</h1>
                            <p className="text-gray-600 md:text-xl text-base text-start">
                            Our program extends beyond technical training to equip you with essential career skills through a range of activities designed to boost your employability.
We offer <b> CV and resume writing workshops</b> to help you create a polished, professional profile that stands out to employers. Additionally, <b> career counseling sessions </b>provide personalized guidance on setting and achieving career goals, navigating industry expectations, and aligning your skillset with market demands.
                            </p>
                        </div>

                        {/* Image container */}
                        <div className="md:w-[433px] md:h-[433px] w-[236px] h-[236px] mb-4 md:mb-0 rounded-t-full overflow-hidden border-t-8  border-green-600 flex-shrink-0">
                            <img src={Employ} alt="ADDITIONAL EMPLOYABILITY CAMPUS ACTIVITIES" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    

                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold my-16 text-gray-900" style={{ lineHeight: "20px", color: "hsla(0, 0%, 11%, 1)" }}>
                        <span className="ellipse absolute ml-16 -mt-5 -z-10"></span>How?
                    </h1>
                    <p className="">
                    These job fairs will be held in major cities across Nigeria, with the goal of facilitating thousands of job placements annually.
                    </p>
                    <p className="font-bold">Register for our upcoming job fairs <span className="font-bold"><Link style={{ color: "hsla(148, 100%, 29%, 1)" }} href="/">[here]</Link></span>.</p>

                </div>
            </article>
        </motion.section>
        </>
    );
};

export default LeepFairsKeyFeature;
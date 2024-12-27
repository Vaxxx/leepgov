 
import SelfPacedLearning from '../assets/job-fairs.jpeg';
import TechSkills from '../assets/vep-img.jpeg';
import VocationalPrograms from '../assets/remote-work.jpeg';
// import Certification from '../assets/center-for-learning.jpeg';
import NelexImg from '../assets/nelex-hero-lady.jpeg';
import ArrowRight from "../assets/arrow.svg";
import WorkDigital from "../assets/work-digital.jpeg";
import { motion } from "framer-motion";

export default function WhyChooseLeep() {

    const reasons = [
        {
            image: VocationalPrograms,
            title: "Digital Nomads",
            description: "This pillar focuses on empowering Nigerian youths to access the global job market with in-demand digital skills to help them thrive.",
            link: "work"
        },
        {
            image: TechSkills,
            title: "VEP",
            description: "Vocational and Entrepreneurship Program aims to equip Nigerians with skills for self-employment and Entrepreneurship.",
            link: "vep"
        },
        {
            image: NelexImg,
            title: "NELEX",
            description: "NELEX will serve as a central hub for employment recruitment and management, helping job seekers connect with employers ",
            link: "nelex"
        },
        {
            image: SelfPacedLearning,
            title: "Job Fairs",
            description: "The LEEP job fairs bring job seekers face-to-face with employers across Nigeria in both the private and public sector.",
            link: "fairs"
        },
        {
            image: WorkDigital,
            title: "Center for Learning Spaces",
            description: "This initiative will focus on upgrading existing training centers into modern hubs for skill acquisition amongst other activities",
            link: "learning"
        }
        
    ]

    const stats = [
        {
            count: "100+",
            name: "Instructors"
        },
        {
            count: "1K+",
            name: "Startup Mentors"
        },
        {
            count: "100K+",
            name: "Certifications"
        },
        {
            count: "50+",
            name: "Vocations"
        },
        {
            count: "2.5M+",
            name: "Jobs"
        }
    ]

    return (
        <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="why-leep min-h-dvh md:min-h-screen flex justify-items-between py-4 lg:my-11 px-2 lg:p-4">
            <article className="w-full px-2 md:px-4 mt-8">
                <h2 className="font-bold text-4xl text-center mb-8" style={{ lineHeight: "32.24px", color: "hsla(0, 0%, 11%, 1)" }}><span className="ellipse absolute -ml-4 -mt-4 -z-10"></span>Why Leep</h2>
                <p className="text-2xl font-bold text-center" style={{ color: "#1E1E1E", lineHeight: "28.35px" }}>
                    Vision 2.5 million jobs
                </p>
                <p className="text-center font-normal my-4 lg:w-4/5 lg:mx-auto md:text-xl md:leading-9 leading-5" style={{ letterSpacing: "2%" }}>
                    LEEP’s vision to create 2.5 million jobs is underpinned by five core pillars. Each pillar addresses a critical aspect of Nigeria’s employment landscape, aiming to tackle challenges related to unemployment, skill gaps, and job access. 
                </p>
                <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 w-full">
                    {reasons.map((reason) => (
                        <div key={reason.title} className="shadow-lg rounded-lg p-4 flex flex-col justify-center text-start gap-4 leading-5 lg:w-1/4">
                            {reason.image !== null ?
                                <div className="w-full h-full relative"><img src={reason.image} alt={reason.title} className="rounded-lg object-cover h-56" /></div> : <img width={500} height={500} className="rounded-lg" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={reason.title} />}
                            <h2 className="font-bold text-xl text-start"
                                style={{ color: "hsla(0, 0%, 11%, 1)" }}>{reason.title}</h2>
                            <p className="text-start text-xl" style={{ color: "hsla(0, 1%, 39%, 1)" }}>{reason.description}</p>

                            <p className="flex items-center gap-4">
                                <a href={reason.link} style={{ color: "#009444" }}>Learn more</a>
                                <img src={ArrowRight} alt="Arrow Right" />
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-5 gap-2 lg:gap-4 my-8 lg:w-4/5 lg:mx-auto">
                    {stats.map((stat) => (
                        <div className="flex flex-col justify-center items-center px-2 rounded-lg py-2" key={stat.name} style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>
                            <p className="font-bold md:text-3xl text-xs" style={{ color: "hsla(0, 0%, 100%, 1)" }}>
                                {stat.count}
                            </p>
                            <p className="text-white" style={{ color: "hsla(0, 0%, 100%, 1)" }}>
                                {stat.name}
                            </p>
                        </div>
                    ))}
                </div>
            </article>
        </motion.section>
    )
}
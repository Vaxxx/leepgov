import { ReactLenis } from '@studio-freight/react-lenis'
import LeepAboutHero from "@/components/LeepAboutHero";
import PresidentMinisterNigeria from "../assets/pbat-hon.jpg";
import LeepStrategicPillars from "../assets/leep-strategic-pillars.jpg";

const About = () => {
    return (
        <ReactLenis root>
        <LeepAboutHero />
        <main className="my-11 lg:my-4">
            <h2 className="text-center lg:my-11 text-4xl font-bold"><span className="ellipse absolute -ml-8 -mt-3 -z-10"></span>About Us</h2>
            <div className="md:w-4/5 p-4 m-auto flex flex-col gap-4 mb-11">
                <p className="md:leading-9">
                Welcome to the official website of the <span className="font-bold">Labour Employment and Empowerment Programme (LEEP)</span>,
                    a <span className="font-bold">renewed hope</span> a renewed hope initiative of His Excellency, President Bola Ahmed Tinubu, led by the Honourable Minister of State for Labour and Employment, Hon. Nkeiruka Onyejeocha aimed at creating 2.5 million jobs for Nigerians on an incremental basis. The Federal Ministry of Labour and Employment (FMLE), is responsible for the development and promotion of productive employment policies and programs for employment generation, and actualization of the Federal Government of Nigeria’s National Action Plan on Employment (NAPE) while also overseeing healthy relations between workers and employers in Nigeria.

                </p>
                <p className="md:leading-9">The Labour Employment & Empowerment Program (LEEP) - is a comprehensive suite of interventions at job creation.</p>
            </div>
            <div className="default-images w-full">
                <img src={PresidentMinisterNigeria} alt="President Tinubu" className="rounded-lg object-contain w-full"  />
            </div>
            <div className="md:w-4/5 p-4 m-auto flex flex-col gap-4 mb-11">
                <h2 className="font-bold text-4xl text-center my-12">Join the <span style={{ color: "hsla(148, 100%, 29%, 1)" }}>LEEP Movement</span></h2>
                <p className="md:leading-9">
                    Through these five strategic pillars, LEEP is building a future-ready workforce that will drive Nigeria's economy forward. Whether you are looking for remote work, vocational training, or opportunities to connect with potential employers, LEEP has the resources to support your career growth. Together, we can create 2.5 million jobs and reduce the unemployment rate significantly.
                </p>
                <p className="font-bold italic text-2xl md:leading-9" style={{ color: "hsla(0, 0%, 12%, 1)" }}>
                    It's time to take that leap.
                </p>
            </div>
            <div className="strategic-pillars flex min-h-96 w-full">
                <img src={LeepStrategicPillars} alt="leep-strategic-pillars" className="object-cover min-w-full" />
            </div>
        </main>
    </ReactLenis>
    );
};

export default About;
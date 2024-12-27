import useWindowSize from '@/lib/useWindowSize';
import ImpactImgOne from "../assets/impact-img-one.png";
import ImpactImgTwo from "../assets/impact-img-two.png";
import ImpactImgThree from "../assets/impact-img-three.png";
import ArrowRight from "../assets/arrow.svg";
import { motion } from 'framer-motion';

const LeepImpactArea = () => {
    const windowSize = useWindowSize();

    const isSmallerScreen = windowSize.width! <= 600;
    return (
        <>
           <motion.section variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }} className="impact-areas min-h-dvh md:min-h-screen flex flex-col md:flex-row justify-center md:gap-6 lg:gap-12 py-20 p-4 md:p-4" style={{ backgroundColor: "#FBF5E2" }}>
            <article className="flex flex-col gap-4 justify-center">
                <h2 className="uppercase text-2xl lg:text-5xl font-bold" style={{ color: "hsla(0, 0%, 11%, 1)" }}>impact areas</h2>
                <p style={{ fontSize: "21px", color: "hsla(0, 1%, 39%, 1)" }}>Our proposed value propositions to prospective
                    <br />unique beneficiaries.</p>
                
                <motion.div
                    style={{ width: 100, height: 100, overflow: "hidden" }} 
                    animate={{ scale: [1, .5, 1]}} 
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
                        <img width={105} className={isSmallerScreen ? "rotate-90" : "rotate-0"} src={ArrowRight} alt="Arrow Right" />
                </motion.div>
            </article>

            <article className="lg:flex justify-center lg:items-center">
                <div style={{
                    backgroundColor: "hsla(148, 100%, 29%, 0.3)",
                    borderRadius: "45.76px",
                    borderWidth: "2px 0.5px 2px 2px",
                    borderStyle: "solid",
                    borderColor: "hsla(148, 100%, 29%, 1)",
                }}
                    className="flex flex-col items-start justify-center gap-11 lg:h-4/5 px-2 lg:px-4 py-8 lg:w-[480px] w-full">
                    <div className="flex items-center gap-4">
                        <p className="bg-white text-black flex items-center justify-center p-2 flex-shrink-0" style={{ width: "50px", height: "50px", borderRadius: "100%", border: "1.72px solid #FFBF4D" }}>
                            <img src={ImpactImgOne} className="object-cover" alt="zero hunger" />
                        </p>
                        <div className="flex-grow">
                            <h2 style={{ color: "hsla(0, 0%, 11%, 1)" }}>Zero Poverty</h2>
                            <p style={{ color: "hsla(0, 1%, 39%, 1)" }}>Every individual will have access to basic skills, 
                            promoting equal opportunities for all.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center py-8 px-8 relative lg:overflow-x-visible overflow-hidden md:w-[500px] w-[350px]" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>
                        <p className="bg-white text-black flex items-center justify-center p-2 flex-shrink-0" style={{ width: "50px", height: "50px", borderRadius: "100%", border: "1.72px solid #FFBF4D" }}>
                            <img src={ImpactImgTwo} className="object-contain" alt="zero poverty" />
                        </p>
                        <div className="text-white font-bold flex-grow">
                            <h2>Zero Hunger</h2>
                            <p>The goal is to ensure everyone is employable and 
                            earns enough to access nutritious food for a healthy life
                                </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="bg-white text-black flex items-center justify-center p-2 flex-shrink-0" style={{ width: "50px", height: "50px", borderRadius: "100%", border: "1.72px solid #FFBF4D" }}>
                            <img src={ImpactImgThree} className="object-contain" alt="decent work and economic growth" />
                        </p>
                        <div className="flex-grow">
                            <h2 style={{ color: "hsla(0, 0%, 11%, 1)" }}>Decent Work & Economic Growth</h2>
                            <p style={{ color: "hsla(0, 1%, 39%, 1)" }}>60% of graduates in Nigeria face unemployment.</p>
                        </div>
                    </div>
                </div>
            </article>
        </motion.section>
        </>
    );
};

export default LeepImpactArea;
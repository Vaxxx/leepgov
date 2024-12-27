 
import LeepHeader from "@/components/LeepHeader";
import HeroBg from "../assets/leep-hero-bg.jpeg"; 
import { motion } from "framer-motion";
import KnowledgeResourceList from "@/components/KnowledgeResourceList";
import JoinFreeSection from "@/components/JoinFreeSection";

const KnowledgeResources = () => {
    return (
        <div> 
                <motion.div variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="hero h-dvh md:h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, .5)), url(${HeroBg})`,
                        backgroundColor: "#1E1E1E80"
                    }}>
                    <LeepHeader />
                    <div className="min-h-dvh hero-container px-4 flex flex-col justify-center gap-8 lg:w-2/3 lg:m-auto">
                        <h2 className="font-bold text-3xl leading-10 lg:text-6xl text-white text-center">Knowledge Resources</h2>
                        <div className="search my-8">
                            <input type="text" name="search" id="search" placeholder="What are you looking for?" className="bg-white w-full py-2 rounded-lg ::placeholder px-4" />
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            <span className="text-white py-1 px-9 rounded-lg" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>Agriculture</span>
                            <span className="text-white py-1 px-9 rounded-lg" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>Agriculture</span>
                            <span className="text-white py-1 px-9 rounded-lg" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>Agriculture</span>
                            <span className="text-white py-1 px-9 rounded-lg" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>Agriculture</span>
                            <span className="text-white py-1 px-9 rounded-lg" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>Agriculture</span>
                        </div>
                    </div>
                </motion.div>
                <motion.section variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="certificate-programs p-4 min-h-dvh lg:w-4/5 lg:m-auto">
                    <p className="font-bold text-2xl lg:text-4xl lg:my-7">Find what works best for you.</p>
                    <p className="mb-3">With these resources, you can successfully pick a niche and start off a career as well as sharpen your skills.</p>
                    <KnowledgeResourceList />
                    <JoinFreeSection />
                </motion.section> 
        </div>
    );
};

export default KnowledgeResources;
import { motion } from "framer-motion";
import ArrowRight from "../assets/arrow.svg";
import KnowledgeBg from "../assets/knowledge-bg.jpeg"; 

export default function KnowledgeResourceSection() {
    return (
        <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="knowledge-resources min-h-dvh md:min-h-screen" style={{ backgroundColor: "hsla(148, 100%, 29%, 0.12)" }}>
            <div className="container md:min-h-screen flex justify-between items-center flex-wrap lg:flex-nowrap w-11/12 m-auto py-8">
                <article className="lg:flex-grow">
                    <img width={500} src={KnowledgeBg} alt="Knowledge Background" className="rounded-lg" />
                </article>
                <article className="lg:w-1/3 flex flex-col gap-4 lg:flex-grow">
                    <h2 className="uppercase text-2xl lg:text-5xl font-bold" style={{ lineHeight: "66.69px" }}>Knowledge Resources</h2>
                    <h3 className="font-bold">Effective access to digital tools to aid learning</h3>
                    <p className="text-xl">
                        Our knowledge resources shares information in accessible formats to support
                        learning and decision-making. It includes digital tools like libraries, databases,
                        and online courses. Effective access to these resources fosters innovation,
                        skill development, and informed problem-solving.
                    </p>
                    <p className="flex items-center gap-4 font-bold">
                        <span style={{ color: "#009444" }}>Learn more</span>
                        <img src={ArrowRight} alt="Arrow Right" />
                    </p>
                </article>
            </div>
        </motion.section>
    )
}
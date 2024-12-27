
import RuralElectrificationAgency from '../assets/rea-nigeria.png';
import BankOfIndustry from '../assets/bank-of-industry.png';
import NSITF from '../assets/nsitf.png';
import { motion } from 'framer-motion';
import useWindowSize from '../lib/useWindowSize';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function LeepSponsors() {
    const windowSize = useWindowSize();

    const isLargeScreen = windowSize.width! >= 1024;
    return (
        <motion.section variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }} initial="hidden" animate="visible" whileInView="visible" transition={{ duration: .5, delay: .25 }} className="leep-sponsors" style={{ borderBottom: "2px solid hsla(148, 100%, 29%, 1)"}}>
            <article className="lg:w-4/5 lg:m-auto min-h-28 md:min-h-96">
                <h2 className="capitalize text-center font-bold lg:text-4xl lg:leading-loose lg:my-10 hidden md:flex md:justify-center">our partners</h2>
                {isLargeScreen ?
                    <div className="sponsor-images lg:flex lg:justify-evenly lg:gap-9">
                        <img width={200} src={NSITF} alt="NiSITF" className="object-contain" />
                        {/* <Image width={200} src={NigComSat} alt="NigComSat" className="object-contain" /> */}
                        <img width={200} src={RuralElectrificationAgency} alt="Rural Electrification Agency" className="object-contain" />
                        <img width={200} src={BankOfIndustry} alt="Bank of Industry" className="object-contain" />
                        {/* <Image width={200} src={EmbassyOfDenmark} alt="Embassy of Denmark" className="object-contain" /> */}
                    </div> : <Carousel plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]} opts={{
                        align: "center",
                    }}
                        className="w-3/5 m-auto">
                        <CarouselContent className="p-4 items-center">
                            <CarouselItem className="flex-grow">
                            <img width={500} src={NSITF} alt="NiSITF" className="object-contain" />
                            </CarouselItem>
                            <CarouselItem className="flex-grow">
                                <img width={500} src={RuralElectrificationAgency} alt="Rural Electrification Agency"  />
                            </CarouselItem>
                            <CarouselItem className="flex-grow">
                                <img width={500} src={BankOfIndustry} alt="Bank of Industry" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>}
            </article>
        </motion.section>
    )
}
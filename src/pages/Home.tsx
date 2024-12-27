import KnowledgeResourceSection from "@/components/KnowledgeResources";
import LeepHero from "@/components/LeepHero";
import LeepImpactArea from "@/components/LeepImpactArea";
import LeepJoinBanner from "@/components/LeepJoinBanner";
import LeepSponsors from "@/components/LeepSponsor";
import SeeHow from "@/components/SeeHow";
import WhyChooseLeep from "@/components/WhyChooseLeep";
import { ReactLenis } from '@studio-freight/react-lenis'



const Home = () => {
   
    return (
        <>
          <ReactLenis root>
            <LeepHero/>
                <main>
                    <SeeHow />
                    <LeepImpactArea />
                    <WhyChooseLeep />
                    <KnowledgeResourceSection />  
                    <section className="min-h-36 w-full">
                        <div className="w-4/5 m-auto py-8 md:py-16 headline flex items-center justify-center">
                            <video className="object-cover" controls>
                                <source src="/videos/leep-vid.mp4" type="video/mp4" />
                                {/* <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag. */}
                            </video>
                        </div>
                    </section>
                    
                <LeepSponsors />
                    <LeepJoinBanner />
                </main>
          </ReactLenis>
        </>
    );
};

export default Home;
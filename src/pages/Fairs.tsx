import LeepFairsHero from '@/components/LeepFairsHero';
import { ReactLenis } from '@studio-freight/react-lenis'
import LeepFairsKeyFeature from '@/components/LeepFairsKeyFeature';

const Fairs = () => {
    return (
        <>
              {/* <ReactLenis root>  */}
                <LeepFairsHero />
                <main>
                    <LeepFairsKeyFeature />
                </main> 
                {/* </ReactLenis> */}
        </>
    );
};

export default Fairs;
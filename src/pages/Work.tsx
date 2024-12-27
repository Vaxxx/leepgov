// import ReactLenis from '@studio-freight/react-lenis/types'; 
import LeepWorkKeyFeature from '@/components/LeepWorkKeyFeature';
import LeepWorkHero from '@/components/LeepWorkHero';

const Work = () => {
    return (
        <>
             {/* <ReactLenis root> */}
                <LeepWorkHero />
                <main>
                    <LeepWorkKeyFeature />
                </main>
            {/* </ReactLenis> */}
        </>
    );
};

export default Work;
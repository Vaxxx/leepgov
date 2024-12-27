export default function SeeHow() {
    return (

        <div className="min-h-36 lg:min-h-screen relative z-10" style={{
            background: "linear-gradient(115.15deg, #FFF9ED 33.53%, rgba(0, 148, 68, 0.85) 87.42%)"
        }}>
            <div className="container w-4/5 m-auto py-8 md:py-16 headline relative">
                <h2 className="font-bold text-2xl lg:text-4xl leading-relaxed inline-block relative" style={{ borderBottom: "3px solid hsla(148, 100%, 29%, 1)" }}>
                    <span className="ellipse absolute -ml-6 -mt-2 inset-0 z-[-1]"></span><span className="z-10 relative">See How</span></h2>
                <div className="w-full my-6 items-center flex justify-center">
                    <video className="object-cover" controls>
                        <source src="../assets/videos/Leep-Sequel.mp4" type="video/mp4" />
                        {/* <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag. */}
                    </video>
                </div>
            </div>
        </div>

    )
}
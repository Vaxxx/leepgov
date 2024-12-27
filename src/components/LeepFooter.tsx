import FederalLabourEmpowermentImg from '../assets/federal-empowerment.png';
import FooterImg from "../assets/footer-img.png";
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter, BsYoutube } from "react-icons/bs"
import { ImInstagram } from "react-icons/im"
import { Link } from 'react-router-dom';

export default function LeepFooter() {
    return (
        <footer className="flex items-center footer min-h-96 md:min-h-96" style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, .8), 
            rgba(255, 255, 255, .8)), url(${FooterImg})`,
            // rgba(255, 255, 255, .8)), url(${FooterImg.src})`,
            backgroundColor: "hsla(148, 100%, 29%, 0.12)", backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right"
        }}>
            <div className="links flex flex-col p-4 gap-4 justify-center lg:flex-row lg:items-start lg:justify-between lg:w-2/3 lg:m-auto" style={{ color: "hsla(148, 100%, 29%, 1)" }}>
                <div className="hidden lg:flex">
                    <img src={FederalLabourEmpowermentImg} className="my-8 lg:w-56" alt="Federal Gov. and Labour Ministry Empowerment" />
                </div>
                <div className="useful-links">
                    <h2 className="font-bold text-2xl my-4">Useful Links</h2>
                    <ul className="lg:flex lg:flex-col lg:gap-4">
                        <li className="text-xl"><Link to="/" style={{ color: "hsla(148, 100%, 29%, 1)" }}>Home</Link></li>
                        <li className="text-xl"><Link to="#" style={{ color: "hsla(148, 100%, 29%, 1)" }}>FAQs</Link></li>
                        <li className="text-xl"><Link to="#" style={{ color: "hsla(148, 100%, 29%, 1)" }}>Testimonial</Link></li>
                        <li className="text-xl"><Link to="#" style={{ color: "hsla(148, 100%, 29%, 1)" }}>Contact Center</Link></li>
                        <li className="text-xl"><Link to="#" style={{ color: "hsla(148, 100%, 29%, 1)" }}>Resources</Link></li>
                    </ul>
                </div>
                <div className="social-links">
                    <h2 className="font-bold text-2xl my-4">Social Links</h2>
                    <ul className="flex gap-4">
                        <li className="w-10 h-10 flex justify-center items-center" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}><Link to="https://www.facebook.com/share/15XtgjYwZ2/?mibextid=LQQJ4d" target="_blank" style={{ color: "#fff" }}><FaFacebookF /></Link></li>
                        <li className="w-10 h-10 flex justify-center items-center" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}><Link to="https://x.com/leepinitiative?s=21&t=ajOrd57DEtVF9J_fyh9m9A" target="_blank" style={{ color: "#fff" }}><BsTwitter /></Link></li>
                        <li className="w-10 h-10 flex justify-center items-center" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}><Link to="https://www.instagram.com/leepinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style={{ color: "#fff" }}><ImInstagram /></Link></li>
                        <li className="w-10 h-10 flex justify-center items-center" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}><Link to="#" style={{ color: "#fff" }}><BsYoutube /></Link></li>
                    </ul>
                    <div className="flex flex-col gap-2">
                        <span className="font-medium text-xl"><Link to="mailto:info@leep.gov.ng" style={{ color: "hsla(148, 100%, 29%, 1)" }}>info@leep.gov.ng</Link></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
 
import { CertificateProgramProps } from '@/lib/types';
import Certificate1 from '../assets/certificate-1.jpeg';
import Certificate2 from '../assets/certificate-2.jpeg';
import CertificateProgramCard from './CertificateProgramCard';

export default function CertificateProgramList() {

    const certificatePrograms: CertificateProgramProps[] = [
        {
            id: "1",
            tag: "Automative",
            title: "Iron Fabrication",
            author: "Jay Mechanics",
            imageUrl: Certificate1,
            numberOfDownloads: 980,
            rating: 5,
            reviewCount: 105
        },
        {
            id: "2",
            tag: "Food",
            title: "Iron Fabrication",
            author: "TT Bakes",
            imageUrl: Certificate2,
            numberOfDownloads: 600,
            rating: 4.5,
            reviewCount: 105
        },
        {
            id: "3",
            tag: "Hospitality",
            title: "Public Health",
            author: "MIT",
            imageUrl: Certificate2.src,
            numberOfDownloads: 400,
            rating: 3.75,
            reviewCount: 35
        }
    ]

    return (
        <>
            <div className="lg:grid lg:grid-cols-3 lg:gap-2">
                {certificatePrograms.map((certificateProgram) => (
                    CertificateProgramCard(certificateProgram)
                ))}
            </div>
            <div className="my-4">
                <span className="text-white py-3 h-14 px-10" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>View All</span>
            </div>
        </>
    )
}
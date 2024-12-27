import { CertificateProgramProps } from '@/lib/types';
import { motion } from 'framer-motion'; 



const CertificateProgramCard = (props: CertificateProgramProps) => {
    return (
        <div>
            <motion.div variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }} initial="hidden" animate="visible" whileInView="visible"  transition={{ duration: .5, delay: .25 }} key={props.id} className="rounded-lg p-4 mb-2 flex flex-col gap-2" style={{ border: "1px solid hsla(0, 0%, 50%, 1)"}}>
            <div className="certificate-program-image">
                <img width={500} height={500} src={props.imageUrl!} alt={props.title} className="rounded-lg" style={{ objectFit: "contain" }} />
            </div>
            <div className="tags flex justify-between items-center">
                <span className="py-1 px-4 rounded-lg" 
                    style={{ backgroundColor: "hsla(126, 48%, 55%, 0.25)", color: "hsla(236, 14%, 47%, 1)" }}>{props.tag}</span>
                <span className="italic text-xs leading-4">PDF</span>
            </div>
            <div className="certificate-title">
                <h2 className="font-bold text-xl leading-6" style={{ color: "hsla(197, 7%, 21%, 1)" }}>{props.title}</h2>
            </div>
            <div className="certificate-author">
                <span className="text-xs leading-4" style={{ color: "hsla(236, 14%, 47%, 1)" }}>{props.author}</span>
            </div>
            <div className="certificate-downloads">
                <span className="text-xs leading-4" style={{ color: "hsla(236, 14%, 47%, 1)" }}>{props.numberOfDownloads} downloads</span>
            </div>
            <div className="rating-reviews flex gap-2" style={{ color: "hsla(0, 0%, 50%, 1)" }}>
                <span>{props.rating}</span> |
                <span>{props.reviewCount} Reviews</span>
            </div>
        </motion.div>
        </div>
    );
};

export default CertificateProgramCard;
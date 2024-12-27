import { KnowledgeResourceProps } from "@/lib/types";
import KnowledgeResourceImg from "../assets/knowledge-resource-img.png"; 
import KnowledgeResourceCard from "./KnowledgeResourceCard";

const knowledgeResources: KnowledgeResourceProps[] = [
    {
        id: "1",
        tag: "Design",
        title: "Steal like an Artist",
        author: "Prof. Kunle Diya",
        imageUrl: KnowledgeResourceImg,
        numberOfDownloads: 980
    },
    {
        id: "2",
        tag: "Design",
        title: "Steal like an Artist",
        author: "Prof. Kunle Diya",
        imageUrl: KnowledgeResourceImg,
        numberOfDownloads: 600
    },
    {
        id: "3",
        tag: "Design",
        title: "Steal like an Artist",
        author: "Prof. Kunle Diya",
        imageUrl: KnowledgeResourceImg,
        numberOfDownloads: 400,
    }
];
const KnowledgeResourceList = () => {
   
           

    return (
        <>
            <div className="lg:grid lg:grid-cols-3 lg:gap-2">
                {knowledgeResources.map((knowledgeResource) => (
                    KnowledgeResourceCard(knowledgeResource)
                ))}
            </div>
            <div className="my-4">
                <span className="text-white py-3 h-14 px-10" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}>View All</span>
            </div>
        </>
    )
    
};

export default KnowledgeResourceList;
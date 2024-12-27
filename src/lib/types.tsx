export interface NavProps{
    id: string;
    name: string;
    path: string;
}

export interface CertificateProgramProps{
    id: string;
    imageUrl: string | undefined;
    title: string;
    tag: string;
    author: string;
    numberOfDownloads: number;
    rating: number;
    reviewCount: number;
}

export  interface KnowledgeResourceProps{
    id: string;
    tag: string;
    title: string;
    author: string;
    imageUrl: string | undefined;
    numberOfDownloads: number;
 }
 
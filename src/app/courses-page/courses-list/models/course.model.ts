export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated?: boolean;
    authors: {
        id: number;
        name: string;
    };
}

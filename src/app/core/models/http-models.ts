export interface LoginResponse {
    token: string;
}

export interface CourseResponse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
}

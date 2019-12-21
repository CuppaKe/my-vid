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

export interface UserInfoResponse {
    id: number;
    token: string;
    name: {
        first: string;
        last: string;
    };
    login: string;
    password: string;
}

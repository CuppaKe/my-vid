export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated?: boolean;
}

export class CourseItem implements Course {
    constructor(
        public id: number,
        public title: string,
        public creationDate: string,
        public duration: number,
        public description: string,
        public topRated?: boolean
    ) {}
}

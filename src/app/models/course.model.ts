export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
}

export class CourseItem implements Course {
    constructor(
        public id,
        public title,
        public creationDate,
        public duration,
        public description
    ) {}
}

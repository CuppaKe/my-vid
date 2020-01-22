import { Course, Author } from "src/app/courses-page/courses-list/models/course.model";
import { CourseResponse } from "../models/http-models";

export function courseResponsetoCourseMapper(cr: CourseResponse): Course {
    return {
        id: cr.id,
        title: cr.name,
        creationDate: cr.date,
        duration: cr.length,
        description: cr.description,
        topRated: cr.isTopRated,
        authors: cr.authors
    };
}

export function coursetoCourseResponse(course: Course): CourseResponse {
    return {
        id: course.id,
        name: course.title,
        date: course.creationDate,
        length: course.duration,
        description: course.description,
        isTopRated: course.topRated,
        authors: course.authors
    };
}

export function convertAuthors(authorName: string): Author {
    const [name, lastName] = authorName.split(" ");

    return {
        id: Math.round(Math.random() * 100),
        name: name,
        lastName: lastName
    };
}

import { Course } from "src/app/courses-page/courses-list/models/course.model";
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

export function CoursetoCourseResponse(course: Course): CourseResponse {
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

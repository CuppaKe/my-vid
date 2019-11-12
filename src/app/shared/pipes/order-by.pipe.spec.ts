import { OrderByPipe } from "./order-by.pipe";
import { Course } from "../../courses-page/courses-list/models/course.model";

const mockCourses: Course[] = [
    {
        id: 1,
        creationDate: "2019-10-10"
    } as Course,
    {
        id: 2,
        creationDate: "2018-10-10"
    } as Course,
    {
        id: 3,
        creationDate: "2020-11-10"
    } as Course
];

describe("OrderByPipe", () => {
    let result: Course[];
    const pipe: OrderByPipe = new OrderByPipe();

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    describe(" Sort array:", () => {
        beforeEach(() => {
            result = pipe.transform(mockCourses);
        });

        it("sort array", () => {
            expect(result[0].id).toBe(3);
        });

        it("sort array", () => {
            expect(result[1].id).toBe(1);
        });

        it("sort array", () => {
            expect(result[2].id).toBe(2);
        });
    });
});

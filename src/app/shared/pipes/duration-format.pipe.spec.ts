import { DurationFormatPipe } from "./duration-format.pipe";

describe("DurationFormatPipe:", () => {
    const pipe: DurationFormatPipe = new DurationFormatPipe();

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should return empty string if no duration has been passed", () => {
        expect(pipe.transform(0)).toBe("");
    });

    it("should transform data", () => {
        expect(pipe.transform(600)).toBe("10min");
    });

    it("should transform data", () => {
        expect(pipe.transform(3660)).toBe("1h 1min");
    });
});

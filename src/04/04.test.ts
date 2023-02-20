test("should take old men older then 90", () => {
        const ages = [12, 20, 22, 1, 100, 90, 14];

        const oldAges = ages.filter(age => age > 90);

        expect(oldAges.length).toBe(1);
        expect(oldAges[0]).toBe(100);
    }
)
test("should take courses chipper 160", () => {
        const courses = [
            {title: "css", price: 110},
            {title: "js", price: 200},
            {title: "react", price: 150}]

        const chipCourses = courses.filter(course => course.price < 160);
        expect(chipCourses.length).toBe(2);
        expect(chipCourses[0].title).toBe("css");
        expect(chipCourses[1].title).toBe("react");
    }
)
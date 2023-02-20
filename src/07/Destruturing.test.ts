import {strict} from "assert";
import {ManType} from "./Destructuring";

let props:ManType = {
    name: "Valek",
    age: 30,
    lessons: [{title: "1"}, {title: "2"},{title: "3"}],
    adress: {
        street:{
            title: "Permskay"
        }
    }
}
test("", () => {

    // const age=props.age;
    // const lessons=props.lessons;
    const {age,lessons}=props;
    const {title}=props.adress.street
    const a=props.age;
    const l=props.lessons;


    expect(age).toBe(30);
    expect(lessons.length).toBe(3);
    expect(a).toBe(30);
    expect(l.length).toBe(3);
})

test("", () => {
    const l1=props.lessons[0];
    const l2=props.lessons[1];
    const [ls1,,...restLessons]=props.lessons;

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
})


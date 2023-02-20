const ages = [12, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => age > 90;

const oldAges = [100];//>90
type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}]
//<160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}
const chipCourses = [
    {title: "css", price: 110},
    {title: "js", price: 200}
];
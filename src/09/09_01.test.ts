let icreaseAge = (u: UserType) => user.age++
type UserType = {
    name: string
    age: number
    adress: { title:string }

}
test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        adress:{
            title:"Minsk"
        }
    };
    icreaseAge(user);

    expect(user.age).toBe(33);
    let superman=user;
    superman.age=1000;
    expect(user.age).toBe(1000)
})

test("array test", () => {
    const users = [
        {
            name: "Dimych",
            age: 32

        },
        {
            name: "Dimych",
            age: 32

        }
    ]
const admins=users
    admins.push({name:"Banug",age:15})
    expect(users[2]).toEqual({name:"Banug",age:15});

})
import {moveUser, upgradeUserLaptop} from "./10_01";

export type UserWitthLaptopType = {
    name: string
    hair: number
    address: { city: string, house?: number }
    laptop: { title: string }
}
test("cnahge adress", () => {
    let user: UserWitthLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    // const movedUser=moveUser(user, "Kiev")
    // expect(user.address).not.toBe(movedUser.address)
    // expect(user.laptop).toBe(movedUser.laptop)
    // expect(movedUser.adress.city).toBe("Kiev")
    const userCopy=upgradeUserLaptop(user, "Macbook")
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})
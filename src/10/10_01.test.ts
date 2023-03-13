import {
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserWitthBooksType,
    UserWitthLaptopType, WitthCompaniesType
} from "./10_01";


test("cnahge laptop", () => {
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
    const userCopy = upgradeUserLaptop(user, "Macbook")
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})
test("cnahge adress house", () => {
    let user: UserWitthLaptopType & UserWitthBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }
    // const movedUser=moveUser(user, "Kiev")
    // expect(user.address).not.toBe(movedUser.address)
    // expect(user.laptop).toBe(movedUser.laptop)
    // expect(movedUser.adress.city).toBe("Kiev")
    const userCopy = moveUserToOtherHouse(user, 100)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.address.house).toBe(100)
})
test("add new books to user", () => {
    let user: UserWitthLaptopType & UserWitthBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }
       const userCopy = addNewBooksToUser(user, ["ts", "rest api"])
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")

})
test("update js to ts", () => {
    let user: UserWitthLaptopType & UserWitthBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }
    const userCopy = updateBook(user, "js", "ts")
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
    expect(user.books.length).toBe(4)

})
test("remove js", () => {
    let user: UserWitthLaptopType & UserWitthBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }
    const userCopy = removeBook(user, "js")
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
    expect(userCopy.books.length).toBe(3)

})
test("update company", () => {
    let user: UserWitthLaptopType & WitthCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id:1,title:"Епам"},{id:2,title:"IT-Incubator"}]
    }
    const userCopy = updateCompanyTitle(user, 1, "EPAM")
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe("EPAM")
})
test("update company", () => {
        let companies={
        "Dimych": [{id:1,title:"Епам"},{id:2,title:"IT-Incubator"}],
        "Artem": [{id:2,title:"IT-Incubator"}]
    }
   const copy=updateCompanyTitle2(companies, "Dimych",1, "EPAM" )
expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("EPAM")
})
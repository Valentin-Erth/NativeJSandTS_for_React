export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type UserWitthLaptopType = UserType & {
    laptop: { title: string }
}
export type UserWitthBooksType = UserType & {
    books: Array<string>
}
export type WitthCompaniesType = UserType & {
    companies: Array<{id:number,title: string}>
}
type CompanyType={
    id:number
    title:string

}
export function moveUser(u: UserWitthLaptopType, city: string) {
    return {
        ...u, adress: {
            ...u.address, city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWitthLaptopType & UserWitthBooksType, house: number) {
    return {
        ...u, adress: {
            ...u.address, house: house
        }
    }
}

export const upgradeUserLaptop = (u: UserWitthLaptopType, titleLaptop: string) => ({
    ...u,
    laptop: {...u.laptop, title: titleLaptop}
})

export function addNewBooksToUser(u: UserWitthLaptopType & UserWitthBooksType, newBooks: Array<string>) {
    return {
        ...u, books: [...u.books, ...newBooks]
    }
}

export const updateBook = (u: UserWitthLaptopType & UserWitthBooksType, lastBook: string, newBook: string) => (
        {...u,
            books: u.books.map(b => b === lastBook ? newBook : b)}
    )

export const removeBook = (u: UserWitthLaptopType & UserWitthBooksType, Book: string) => (
    {...u,
        books: u.books.filter(b => b!== Book )}
)
export const updateCompanyTitle = (u:  WitthCompaniesType, companyId: number, newTitle: string) => (
    {...u,
        companies: u.companies.map(c => c.id === companyId ?{...c,title: newTitle } : c)
    }
)
export const updateCompanyTitle2=(companies: { [key:string]: Array<CompanyType> },
                                  userName:string,
                                  companyID:number,
                                  newTitle:string)=>{
    let companyCopy = {...companies, [userName]: companies[userName].map(c=>c.id===companyID?{...c,title:newTitle}:c)}
        return companyCopy
}

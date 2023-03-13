import {UserWitthLaptopType} from "./10_01.test";

export function moveUser(u:UserWitthLaptopType,city:string){
return{
    ...u,adress:{
        ...u.address,city:city
    }
}
}
export const upgradeUserLaptop =(u:UserWitthLaptopType,titleLaptop:string)=> ({...u,
    laptop: {...u.laptop, title:titleLaptop}})
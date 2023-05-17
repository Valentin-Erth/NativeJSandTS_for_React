
class DeleteUserAction{
    constructor(userID) {
        this.type="DELETE-USER";
        this.payload={
            userID: userID
        }
    }
}
const action1=new DeleteUserAction(1231324)
const action2=new DeleteUserAction(4124)
// console.log(action1)
// console.log(action2)
//фабричная функция
function hello(){
    console.log(`I am ${this.name} from ${this.site}`)// this берет от того объекта у которого вызвана была функция
}
const userFabric=(name)=>{
    const user={
        name: name,
        site:"incubator",
        dateOfBrith:new Date(2000, 1,2),
        hello:hello
    }
    return user
}
// const u1=userFabric("GGGGGG")
// const u2=userFabric("HHHHHH")
// u1.hello()

// как сейчас нужно делать через class
class User{
    #name="";//приватное свой-во, инкапсуляция
    constructor(name,site){
        this.name= name;
        this.site=site;
        this.dateOfBrith=new Date(2000, 1,2);
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
    get Name(){
        return this.#name
    }
    set Name(value){
       this.#name=value
    }
}
const u1=new User("FFFF", "incubator")
const u2=new User("AAAA", "incubator")
// console.log(u1.hello())//показываем вновь созданный объект. унего вызываем метод hello
// console.log(u2.hello())
console.log(u1.Name)
console.log(u1.Name="Pael")
console.log(u1.Name)

class Coder extends User{//наследовали от User,расширили возможности доп методом
    code(){
        console.log(`I am ${this.name}, here is my code: function sum(a,b)=>a+b`)
    }
}
const coder1= new Coder("FFFF coder", "incubator")
coder1.code()


//React
// class ProfilePage extends React.Component{//Создается экземпляр объекта,наследуемся от React.Component у него будут методы и сво-ва
// constructor(props){
//     super(props)
// }
//   render() {
//   return "IT Incubator"}
// }
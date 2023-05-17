function randomIntFromIntarval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const findUserDB = (id) => {
    const users = [{id: 1, name: "Dimych", friend: 4}, {id: 2, name: "Eric", friend: null}, {
        id: 3,
        name: "Mike",
        friend: 2
    }]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user == null) {
                rej("user not found")
            } else {
                res(user)
            }
        }, randomIntFromIntarval(500, 1500))
    })
}
const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} lovws yuo`
                }
                if (url.indexOf("it-kamasutra") > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: "we will prepare students for you"
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromIntarval(1, 5) * 1000)
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

// const promise1 = axios.get("https://google.com")//запрос на сервер
// // promise1.then((data) => {
// //     console.log(data.data)
// // })
// const promise2 = findUserDB(1)//запрос в БД
// promise2
//     .then((user) => {
//         console.log(user)
//     })
//     .catch((error) => {
//         console.warn(error)
//     })
//     .finally(() => {
//         console.log("finish")
//     })
//
// const otherPromise = Promise.all([promise1, promise2])
// otherPromise.then((result) => {
//     const dataFromGoogle = result[0]
//     const userFromDb = result[1]
//     console.log(dataFromGoogle, userFromDb)
// })
//     .catch(() => {
//         console.log("Try later. inicialization failed")
//     })
// //
// const resolvedPromise = Promise.resolve([1, 2, 3, 4])
// console.log(resolvedPromise)// сразу зарезовленный промис. Как заплатка если сервер не готов
//
// const userApi = {
//     getAllUsers() {
//         return Promise.resolve([{name: "D"}, {name: "J"}])// тут возвращаем фейковые данные, когда сервак починят подменим
//     }
// }
// const pr = userApi.getAllUsers()
// pr.then((users => console.log(users)))
//
// const rejectPromise = Promise.reject({message: "Some error"})
// console.log(rejectPromise)//сразу зареджектнутый промис
//
// //Цепочка вызовов then
// findUserDB(2)
//     .then((user) => user.name)
//     .then(name => console.log(name))// в name получит то что вернул callback т.е. user.name. Зарезолвится только если будет резолв у promise2
// //
// axios.get("https://google.com")
//     .then(res => res.data)// этот промис возвращает data из responce
//     .then(data => console.log(data))// этот промис принимает в параметры data,то что вернул выше и тоже возвращает
//
// const makeGoogleRequest = () => {
//     return axios.get("https://google.com")
//         .then(res => res.data)
//         .then(data => data.vacancies)
// }
// makeGoogleRequest().then(vacancies => console.log(vacancies))
//
// const lastPromise = findUserDB(1)//этот промис зарезолвиться числом в конечном итоге
//     .then((user) => user.name)
//     .then(name => {
//         console.log(name)
//         return 100
//     })
//     .then(number => {
//         console.log(number)
//         return {value: number + 1}
//     })
//     .then(obj => {
//         console.log(obj.value)
//         const pr = Promise.resolve(obj.value + 1)
//         return pr
//     })
//     .then(number => {//сюда приходит то чем зарезолвиться промис pr, т.е. число
//         console.log(number)
//         return number + 1
//     })
// // сначала отработают все then а затем все колбэки в них поочереди
//
// //Acync/await
// async function run() {
//     let user = await findUserDB(1) //дожидаемся резуьтата резолва промиса и присваиваем результат переменной. выполнение строчка за строчкой, нет колбэков
//     console.log(user.name)
//     let friend1 = await findUserDB(user.friend)
//     console.log(friend1.name)
//     let friend2 = await findUserDB(friend1.friend)
//     console.log(friend2.name + " " + user.name)
// }
//
// run()
//
// //Создаем промисы
// indUserDB(1)
//     .then((user) => {
//         console.log(user.name)
//     })
//
// //промисификация, создание промиса
// function getNumber() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //reject("some error")
//             resolve(Math.random())
//         }, 2000)
//     })// создание промиса с помощью класса конктруктора,тут можно сложную логику создать
//     return promise
//     // Promise.resolve(Math.random()) //создание промиса зарезовленного там где его не было
// }
// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))
//
// //запись в local Storage
// const repo={
//     save(data){
//         localStorage.setItem("some-key", JSON.stringify(data))
//     },
//     saveAsync(data){//создает промис и его возвращает
//         const promise=new Promise((resolve,reject)=>{
//             try {
//                 localStorage.setItem("some-key", JSON.stringify(data))
//                 resolve()
//             }catch (error) {
//                 reject(error)
//             }
//            })
//         return promise
//     },
//     read(){
//         return new Promise((res,rej)=>{
//             const data=localStorage.getItem("some-key")
//             if(!data){
//                 res(null)
//             }else  {
//                 res(JSON.parse(data))
//             }
//         })
//     }
// }
// const result=repo.save({name: "GGGGG"})//синхронная версия
// if(result){
//     console.log("SAVED")
// }else{
//     console.log("NOT SAVED")
// }
//
// repo.saveAsync({name: "GGGGG"}) //асинхронная версия
// .then(()=>console.log("SAVED"))
// .catch(error=>console.log("NOT SAVED"+ error))
//
// const run=async ()=>{//асинхронная версия через async await
//     await repo.saveAsync({name: "GGGGG"})
//     console.log("SAVED")
//     const data= await repo.read()
//     console.log(data)
// }

const delay = (ms) => {//функция которая возвращает промис и резолвиться через переданное кол-во ms
    return new Promise((res, rej) => {
        setTimeout(() => res(), ms)// в теле промиса функция таймер, которая принимает ms из параметров
    })
}
async function run(){
    await delay(1000)// ожидаем резолв промиса
    console.log(1)
    await delay(1000)
    console.log(2)
    await delay(1000)
    console.log(3)
}
run()
// delay(1000).then(() => console.log(1))
// delay(2000).then(() => console.log(2))
// delay(3000).then(() => console.log(3))

//Обработка ошибок в промисах
// findUserDB(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendID => findUserDB(friendID))
//     .catch(()=>({name: "BOT Friend", friend: 3}))// Если нужна обработка ошибки сразу после реджкт то вставляем catch, который может вернуть заглушку и отдать дальше в then
//     .then(friend1 => {
//         console.log(friend1.name)
//         return friend1.friend
//     })
//     .then(friendID => findUserDB(friendID))
//     .then(friend2 => console.log(friend2.name))
// .catch(error=>alert(error))

// async function run() {
//     try {
//         let user = await findUserDB(1) //дожидаемся резуьтата резолва промиса и присваиваем результат переменной. выполнение строчка за строчкой, нет колбэков
//         console.log(user.name)
//         try {// обработка ошибок с помощью контрукции try..catch,которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное
//             let friend1 = await findUserDB(user.friend)
//         } catch (error) {
//             console.log(error)
//             friend1={name: "BOT Friend", friend: 3}
//         }
//         console.log(friend1.name)
//         let friend2 = await findUserDB(friend1.friend)
//         console.log(friend2.name)
//     } catch (error){
//         console.log(error)
//     }
// }
//
// run()

async function xxx(){}//любая асинхронная функция возращает промис
let a=xxx()
console.log(a)
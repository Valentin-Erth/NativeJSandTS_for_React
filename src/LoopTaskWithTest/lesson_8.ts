// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    let arr = [...nums]
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    return arr.reduce((t, a) => t + a)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (b + c < a || a + b < c || a + c < b) {
        return "00"
    } else {
        if (a === b && b === c && a === c) {
            return "10"
        } else if (a === b || b === c || a === c) {
            return "01"
        } else {
            return "11"
        }
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return String(number).split("").map(el => +el).reduce((t, a) => t + a)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        (i % 2 == 0)?sumEven += arr[i]: sumOdd += arr[i]
         }
    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newArr = [...array]
    return newArr.filter(el => el > 0 && Number.isInteger(el)).map(el => el*el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return N * (N + 1) / 2;

}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let arr = [];
    if (amountOfMoney > 0){
        for (let i = 0; i < banknotes.length; i++) {
            while (amountOfMoney - banknotes[i] >= 0) {
                amountOfMoney -= banknotes[i]
                arr.push(banknotes[i])
            }
        }
    }
        return arr
}
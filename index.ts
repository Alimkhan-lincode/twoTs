// Создайте массив чисел от 1 до 5 и опишите его типы.
const number: number[] = [1,2,3,4,5];

// Создайте массив строк, содержащий названия ваших любимых фруктов, и опишите тип.
const string: string[] = ["apple","banana","strawberry"];

// Создайте массив с числами, строками и булевым значением и опишите тип.
const ArrayTyp: (number | string | boolean)[] = [123, "String", true];

//Создайте переменную с типом кортеж из трех элементов: вашего имени, фамилии и возраста, и присвойте переменной соответствующие значения.
let y: [string, string, number] = ["Alimkhan","Magomadov", 17 ];

// Создайте кортеж, содержащий несколько ваших любимых цветов и присвойте переменной соответствующие значения.
let MyloveColor: [string, string, string] = ["Black", "white", "Green"];

// Напишите функцию, которая никогда не завершается (возвращает never), и вызовите ее.
const message = "hello";
const error = (msg: string): never => {
  throw new Error(msg)
}

//Попробуйте присвоить переменной типа never какое-либо значение. Что произойдет?
let neverPris: never;
neverPris = "Hello"; //Выдает ошибку компиляции

//Используйте тип never в качестве возвращаемого типа функции, которая выбрасывает ошибку
const tryNever = (message: string): never => {
  throw new Error(message) 
}

try {
  tryNever("Возвращаем тип, который выбрасывает ошибку")
} catch (error) {
  //И сюда console.error(...) писать не буду, так как и так не подключено к html
}

//Создайте объект, содержащий информацию о вашей любимой книге (название, автор, год издания и т.д.).
const created = {
  title: "Человек, который хотел быть счастливым",
  author: "Лоран Гунель",
  year: 2008
};

//Создайте объект, содержащий информацию о вас (имя, фамилия, возраст и т.д.).

const me = {
  name: "Alimkhan",
  surname: "Magomadov",
  year: 17
};

// Напишите функцию, которая принимает объект и ничего не возвращает.

const createdNoTry = (o: object | null ): void => {}

createdNoTry({object: "Ничего не возвращает!"})
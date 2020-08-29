/* eslint-disable */
let str = 'loginLink=Hello&passwordLink=Word';
str.match(/loginLink/g);//возвращает все найденные элементы в виде массива. Array
str.split(separator/regexp, limit);//разбивает строку на массив по сепаратору
str.includes('loginLink', 2);//ищет с начала. 2й пар. делает сдвиг с начала. если находит кусок возвращает bool
str.endsWith('loginLink', 2);//ищет с конца. 2й пар. делает сдвиг с конца. возвращает bool
str.startsWith('loginLink')//ищет в начале

str.lastIndexOf('o');//возвращает индекс последнего найденного элемента
str.repeat(2);//повторит строку 2 раза
str.concat();//соединяет минимум 2 строки и возвращает строку
str.replace(regexp|substr, newSubStr|function(){});//что найти, на что заменить. Возвращает обратно строку
str.indexOf('Hello');//возвращает индекс 1го вхождения. 
str.search('Hello');//возвращает индекс 1го вхождения. Принимает так же рег.выр. 
str.slice(0, 10);//откуда, покуда обрезать строку принимает индекс. 
str.substr(0, 10);//Это старый вариант как и substring одно и то же. Новый slice 
str.charAt(5);//возвращает символ по данному индексу. Естественно тип строка
str.toLowerCase();//приводит в нижний регистр
str.toUpperCase()//приводит в верхний регистр
str.trim();//обрезает пробелы
//Это экспериментальная технология
str.padStart(10, "этим");//чем заполнить первые 10 ячеек данной строки
str.padEnd(10, "дополним");//строка входит в учёт 1го параметра, если что-то останется от 10ти, то 2й пар дополнит строку
String.raw({ raw: "Hello" }, 1, 2, 3);  // "H1e2l3lo"

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

Math.ceil() //сократить в большую сторону
Math.floor() //сократить в меньшею сторону
Math.round()//сокращает до ближайшего целого
Math.max() //возвращает наибольшее число из приложенных аргументов. Массив не принимает
Math.min() //возвращает наименьшее число из приложенных аргументов. Массив не принимает
Math.max.apply(null, [343,454,23,21])//массив так можно передать
Math.abs('-3')//преобразует числа строки в number и положительное.Одно число в Math.abs([2]) [] -опустит
Math.pow(7, 2);// 7 во 2й степени
Math.sqrt(9);// возвращает корень числа
Math.random()//рандомное значение от 0 до 1
Math.sin()//возвращает синус числа 
Math.cos()//возвращает косинус числа
Math.tan()//возвращает тангенс числа
/*--------------------------------------------------------------------------------------*/
let num = 123.44445
num.toFixed(3)//ограничивает число после точки и возвращает тип String

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
/*
 Все методы которые могут получить старый массив и вернуть такой же, но новый это и есть возможность 
 скопировать. map, Array.from, filter, оператор spread, и т.д
*/
//3 способа разбить строку
Array.from('Привет')//принимает строку или итератор. Возвращает новый массив.
'Привет'.split('')
([...'Привет'])

arr.pop();//удаляет (изменяя полученный массив) последний элемент массива и возвращает его
arr.push();//добавляет (изменяя полученный массив) в конец массива и ВОЗВРАЩАЕТ длину массива, а не массив
arr.shift();//удаляет (изменяя полученный массив) и возвращает 1й элемент
arr.unshift();//добавляет (изменяя полученный массив) в начало массива и возвращает длину всего массива

arr.flat();//убирает вложенность массивов [23,[43,22]] - [23,43,22]. Принимает число на сколько уровней поднять
arr.includes();//есть ли в массиве искомая строка
arr.indexOf();//тот же принцип как и в string
arr.concat();//склеивает 2 и более массивов (не изменяя старые) и возвращает новый
arr.slice();//обрезать массив (как и в string) Откуда,покуда. Возвращает кусок не изменяя основной

arr.splice(1,0, 'ss');
/*
    splice - изменяет основной массив вырезая у него кусок откуда, покуда и что 
    вместо него вставить. Вырезанный же кусок splice возвращает.
*/
arr.copyWithin(3, 1)//3й необ.
   /* Счёт как положено с 0. 
      1й с какого индекса (включительно) класть копию
      2й с какого индекса (включительно) начать делать копию
      3й где закончить. этот индекс не захватывается. (3й пар. (индекс) - 2й пар. (индекс) = копия )
   */
arr.fill(100, 1, 4);//заполняет числом 100 от 1 индекса до 4. Заполнение будет тех индексов которые реально существуют. Не расширяет массив

arr.join();//склеивает массив в строку. Принимает разделитель 
arr.toString();//тот же join но без сепаратора
arr.reverse();//переворачивает массив
/**######--Переборы--######## */
arr.forEach(()=>{});//цикл
arr.map((val, inx, _this)=>{});//тот же forEach только может возвращать новый массив  
Array.from(arr, (val,inx) => {})//90% тот же map.callback без 3го аргумента
//если map или from указать логические выражения, то вернётся массив с bool значениями 

arr.every((item) => item < 40)//проверяет каждый элемент на соответствие условию. Не соответствие - false и прекращает итерацию 
arr.some((item) => (item === 60))//ищет значение. Есть - вернёт true и прекращает итерации
arr.find((item) => (item === 60));//возвращает найденный в массиве элемент
arr.findIndex((item) => (item === 60));//возвращает индекс найденного элемента
//аналогично если был forEach с командой break, только с возвратом; 
arr.filter((item) => item > 30);//исключает элементы и вернёт новый массив не трогая старый
//sort по ум. работает с каждым эл. как со строкой. кастомный вариантом определяем как числовое выражение
arr.sort((value1,value2)=> (value2 - value1));//от боль к меньшему, наоборот value1 - value2
//возвращает новый сортированный массив, так же изменяет основной. 

arr.reduce((preventValue, item) => (preventValue + item), total);//на основе своего инструмента может преобразовывать один тим в другой. 
//Например работать с массивом и вернуть объект
//Пример
/*
  ПРОЧИТАТЬ. 
  Всё что нужно знать это то, что reduce это обычный цикл, передав reduce 2му параметру начальное значение
  мы в callback во 2м параметре получаем перебор цикла от с 1элемента и до конца,
  Если не передать total, во 2й параметр callback'a цикл массива начинается
  со 2 элемента массива и цикл будет на одну итерацию меньше. 
  Так что лучше всегда предавать, что бы не было путаницы
  
  1й же параметр получает total если он есть, если нет то получает 1й элемент массива
  при первой итерации, а далее параметр ожидает изменения над ним на каждой итерации 
  и возврат этих изменений. 1й параметр как бы сохраняет изменения на итерации и передаётся 
  в следующую итерацию для дальнейших изменений. В конечном итоге после всех изменений
  возвращается reduce именно этот параметр.
  Если ничего не вернуть, то ничего и не будет. А если вернуть, 1й параметр
  работает как бы с запозданием на 1 итерацию 

  3й параметр это индексы
  ВАЖНО reduce не привязан к определённому типу возвращаемых данных.
  Что должен вернуть метод определяет программист.
  На основе массива можно вернуть объект 
  */
const arr1 = [
  { test: [1] },
  { test2: [2] },
  { test3: [3] },
];

arr1.reduce((a, b) => ({...a,...b}));
//из 2х массивов объект
let arr3 =  ['a', 'b', 'c'];//ключи
let arr4 = [7, 2, 5];//значения

arr3.reduce((acc, n, i) => (acc[n] = arr4[i], acc), {})

/*
   Зная что acc на 1й итерации это пустой объект, а n это 1й элемент массива,
   и зная о том что свойства можно создавать обращаясь к объекту просто через точку
   и через синтаксис массива, то нам нужно на каждой итерации создавать разные свойства
   а не одно и тоже поэтому поэтому обращение через []. Возвращаем acc
*/

//Сложный вариант для понимания
const arr2 = [//массив что-то типа ключ - значение
  "test", 16 ,
  "test2", 2 ,
  "test3", 3 ,
];
//(!(c%2)) - 0%2 = 0, 1%2 = 1, для if 0 = false поэтому !0 = true и получаем чётные цифры


let ob1 = arr2.reduce((a, item, inx, _this) => { 
    
  if(!(inx%2))
     a[item] = _this[inx+1]
  
  return a
}, {});

//сократить
let ob2 = arr2.reduce((a, item, inx, _this) => (
  (!(inx%2))?a[item] = _this[inx+1] : null, a), {});
console.dir(ob1);

/*
  Массив нужно разбить на чётные(ключи) и нечётные(значения) для этого нужно делить 
  с остатком на 2 и получать будем 0 и 1. Ключи будут отмечаться 0, 0 = false 
  значит !false. 
  Берём объект создаём свойство через ключ и чтоб присвоить значение(а в этой итерации его нет)
  обращаемся через 4й параметр this и выбираем тот индекс в котором находимся + 1,
  то есть следующее значение массива.  
*/

/*-------------------------------------------------------*/
let arrOb = {};
for(let i of arr1) Object.assign(arrOb, i) //проще

console.dir(arrOb);

let arrObj = {};
arr1.forEach((i) => Object.assign(arrObj, i) ) //или

console.dir(arrObj);

/*----МЕТОДЫ ОБЪЕКТА--------------------------------------------------------------------------------------*/
let obj = {
    name: 'Alex',
    age: 21,
    city: 'NewYork',
    number: 15,
    [Symbol('foo')]: 'sikret',//такое свойство не изменить
    get _number(){  return this.number  },
    set _number(value){
      if(value > 0 && value <= 20)
        this.number = value 
      else{
        let strErr = (value < 0)? 'Меньше: 0' : 'Больше: 20';
        console.dir(strErr);
      } 
    }
}

let obj1 = Object.assign({}, obj);//ES5 копировать объект в новый. Передать можно много объектов
let obj2 = {...obj1};//ES6

obj._number = 21;
console.dir(obj);
/*
  На вопрос: "Что такое десткриптор" - это некий контролирующий функционал который можно изменять влияя на 
  доступ, изменение и удаление свойст и методов, точно не уверен возможно и объектов.
  и имеет некий контролирующий функционал для этого свойства. Например напрямую через метод defineProperty
  или косвенно через set и get.  
  Что нам даёт set и get. По сути мы же может обратиться напрямую к свойству и его изменить.
  Да можем. Обращаюсь через set и get мы может устанавливать (контролировать) логику изменения для свойства
  т.к. внутри объекта set и get ведут себя как функции.
  Конечно что бы нельзя было напрямую что то менять в свойстве то есть defineProperty
*/

Object.defineProperty(obj, 'name1', {
    enumerable: false,//будет ли св-во перечисляемым
    configurable: false,//можно ли удалять c помощью delete, модифицировать св-во
    writable: false,//можно ли изменить значение
    value: 'Борис',//значение свойства
   
  });
  /*
    добавление свойства объекту которое можно контролировать.
    1е. в какой объект
    2е. какое свойство
    3е. объект параметров для этого свойства.
    НЕДОСТАТОК. такой метод нужно на каждое свойство
  */
  obj.name1 = 'ss';//не изменится
  delete obj.name1;//не удалиться
//для многих свойств
  Object.defineProperties(obj, { 
    name1: {
      enumerable: false,//будет ли св-во перечисляемым
      configurable: false,//можно ли удалять c помощью delete, модифицировать св-во
      writable: false,//можно ли изменить значение
      value: 'Борис'//значение свойства
      },
    name2: {
      enumerable: false,//будет ли св-во перечисляемым
      configurable: false,//можно ли удалять c помощью delete, модифицировать св-во
      writable: false,//можно ли изменить значение
      value: 'Петян'//значение свойства
    }
  });

  Object.freeze(obj);//замораживает объект, устанавливая дескрипторы configurable и writable в false.

  let dest = Object.getOwnPropertyDescriptor(obj, 'name1');//узнаёт состояние дескрипторов


 Object.create();//Если требуется передать объекту узел prototype в наследство. Читать в конце ООП main.js
 Object.values({key: 'values'}) //получить все значения ключей и вернуть итератор
 Object.keys({key: 'values'}) //получить все ключи и вернуть итератор







 /*
   *********** Общие методы не привязанные к объектам **********
 */
 

 parseFloat('4ffffeeee');//принимает строку если строке есть 1е число то вернёт его типом Number иначе NaN 

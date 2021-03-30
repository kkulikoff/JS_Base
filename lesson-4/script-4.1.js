// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numCalc = {
   'единицы': 'пусто',
   'десятки': 'пусто',
   'сотни': 'пусто',
   calculate(num) {
      if (Math.sign(num) == -1 || num > 999) {
         console.log('Введеное число превышает расчетные параметры');
         return console.log(this);
      }
      else
         if (num.toString().length == 3) {
            for (let i = num; i.toString().length == 3;) {
               i = Math.floor(i / 10);
               this['единицы'] = num % 10;
               for (let j = i; j.toString().length == 2;) {
                  this['десятки'] = j % 10;
                  j = Math.floor(j / 10);
                  this['сотни'] = j;
               }
            }
            return console.log(this);
         }
         else if (num.toString().length == 2) {
            for (let i = num; i.toString().length == 2;) {
               i = Math.floor(i / 10);
               this['единицы'] = num % 10;
               this['десятки'] = i;
            }
            return console.log(this);
         }
         else if (num.toString().length == 1) {
            this['единицы'] = num;
            return console.log(this);
         }
   }
};

let number1000 = numCalc;
let numberMinus666 = numCalc;
let number245 = numCalc;
let number24 = numCalc;
let number2 = numCalc;
let number999 = numCalc;


number1000.calculate(1000);     // Введеное число превышает расчетные параметры
// {единицы: "пусто", десятки: "пусто", сотни: "пусто", calculate: ƒ}
numberMinus666.calculate(-666); // Введеное число превышает расчетные параметры
// {единицы: "пусто", десятки: "пусто", сотни: "пусто", calculate: ƒ}
number245.calculate(2);         // {единицы: 5, десятки: "пусто", сотни: "пусто", calculate: ƒ}
number24.calculate(24);         // {единицы: 4, десятки: 2, сотни: "пусто", calculate: ƒ}
number2.calculate(245);         // {единицы: 5, десятки: 4, сотни: 2, calculate: ƒ}
number999.calculate(999);       // {единицы: 9, десятки: 9, сотни: 9, calculate: ƒ}

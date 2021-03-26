// 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0);    // false
console.log(null === 0);   // false
console.log(null > 0);     // false
console.log(null < 0);     // false
console.log(null >= 0);    // true
console.log(null <= 0);    // true

/*
Очевидно, что все сравнения должны выводить false, но...
Сравнения производятся через "Абстрактный алгоритм сравнения для отношений" описанный здесь http://javascript.ru/ecma/part11#a-11.8.5
Из разъяснений в статье https://habr.com/ru/company/ruvds/blog/337732/
К строке 7 и 8
Если null < 0 принимает значение false, то null >= 0 принимает значение true
С точки зрения математики, если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.
*/
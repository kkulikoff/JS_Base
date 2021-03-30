// 2. Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
   goods: {
      'Камера': 5600,
      'Видеорегистратор': 7800,
      'Контроллер': 25000
   },
   countBasketPrice() {
            let acc = 0;
      for (let count in this.goods){
        acc += this.goods[count];
      }
      return acc;
   },
   outputGoods() {
      let arrGoods = [];
      let total = 0;
      for (let outputGood in this.goods){
         arrGoods.push(outputGood);
         total++;
      }
      return console.log('В корзине всего ' + total + ' товаров.\n'
            + arrGoods.join(', ') + '\n' +
            'Общая сумма покупки составляет: ' + this.countBasketPrice());
   }
};

let lastBasket = basket;
lastBasket.outputGoods();
/*
В корзине всего 3 товаров.
Камера, Видеорегистратор, Контроллер
Общая сумма покупки составляет: 38400
*/
lastBasket.goods['USB Hub'] = 1700;
lastBasket.outputGoods();
basket.outputGoods();
/*
В корзине всего 4 товаров.
Камера, Видеорегистратор, Контроллер, USB Hub
Общая сумма покупки составляет: 40100
*/


/* ***Прошлое ДЗ***
*******************************************************

let goods = ['Камера','Видеорегистратор','Контроллер'];
let price = [5600, 7800, 25000];
let basket = [goods, price];

function countBasketPrice() {
    let acc = 0;
    for (let count in basket[1]){
        acc += basket[1][count]; 
    }
    return acc;
}

let outputGoods = basket[0].join(', ');

console.log('В корзине всего ' + basket[0].length + ' товаров.\n'
            + outputGoods + '\n' +
            'Общая сумма покупки составляет: ' + countBasketPrice());
*/

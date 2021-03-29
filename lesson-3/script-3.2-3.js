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

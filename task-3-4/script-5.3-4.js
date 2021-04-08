const goodsCart = document.querySelector('.catalog');
goodsCart.innerHTML = `<div class="goods">
<div class="prod-1">
    <div class="desc">
        <p>nameProduct: 'Камера'</p>
        <p>model: 'K-499'</p>
        <p>price: 5600</p>
        <p>count: 9</p>
    </div>
    <button class="btn" onclick="basket.addProduct(product.product_1)">Добавить в корзину</button>
</div>
<div class="prod-2">
    <div class="desc">
        <p>nameProduct: 'Видеорегистратор'</p>
        <p>model: 'V-499'</p>
        <p>price: 7800</p>
        <p>count: 7</p>
    </div>
    <button class="btn" onclick="basket.addProduct(product.product_2)">Добавить в корзину</button>
</div>
<div class="prod-3">
    <div class="desc">
        <p>nameProduct: 'Контроллер'</p>
        <p>model: 'Kt-499'</p>
        <p>price: 25000</p>
        <p>count: 5</p>
    </div>
    <button class="btn" onclick="basket.addProduct(product.product_3)">Добавить в корзину</button>
</div>
</div>`;
const product = {
    product_1: {
        nameProduct: 'Камера',
        model: 'K-499',
        price: 5600,
        count: 9
    },
    product_2: {
        nameProduct: 'Видеорегистратор',
        model: 'V-499',
        price: 7800,
        count: 7
    },
    product_3: {
        nameProduct: 'Контроллер',
        model: 'Kt-499',
        price: 25000,
        count: 5
    }
};
function checkBasket() {
    if (document.getElementById('basket').innerHTML == '') {
        document.getElementById('basket').innerHTML = 'Корзина пуста';
    }
}

const basket = {
    goods: {
        //    'Камера': 5600,
        //    'Видеорегистратор': 7800,
        //    'Контроллер': 25000
    },
    countBasketPrice() {
        let acc = 0;
        for (let count in this.goods) {
            acc += this.goods[count];
        }
        return acc;
    },
    outputGoods() {
        let arrGoods = [];
        let total = 0;
        for (let outputGood in this.goods) {
            arrGoods.push(outputGood);
            total++;
        }
        let tag_basket = document.getElementById('basket');
        tag_basket.innerHTML = ('В корзине всего товаров - ' + total + '<br>'
            + arrGoods.join(', ') + '<br>' +
            'Общая сумма покупки составляет: ' + this.countBasketPrice());
        return tag_basket;
    },
    addProduct(product) {
        let addName = product.nameProduct;
        let addPrice = product.price;
        this.goods[addName] = addPrice;
        this.outputGoods();
    },

};
function clearBasket() {
    document.getElementById('basket').innerHTML = '';
    basket.goods = {};
    checkBasket()
}
checkBasket()
// const btn = document.querySelector('.addProd');
// btn.addEventListener('click', basket.addProduct());

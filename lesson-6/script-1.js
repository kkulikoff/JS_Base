const goodsCart = document.querySelector('.catalog');
goodsCart.innerHTML = `<div class="goods">
<div class="prod-1">
    <div class="desc">
        <p>nameProduct: 'Камера'</p>
        <p>model: 'K-499'</p>
        <p>price: 5600</p>
        <p>count: 9</p>
    </div>
    <button class="btn" onclick="basket.addProduct(products.product_1)">Добавить в корзину</button>
    <button class="myBtn">Открыть галерею</button>
</div>
<div class="prod-2">
    <div class="desc">
        <p>nameProduct: 'Видеорегистратор'</p>
        <p>model: 'V-499'</p>
        <p>price: 7800</p>
        <p>count: 7</p>
    </div>
    <button class="btn" onclick="basket.addProduct(products.product_2)">Добавить в корзину</button>

</div>
<div class="prod-3">
    <div class="desc">
        <p>nameProduct: 'Контроллер'</p>
        <p>model: 'Kt-499'</p>
        <p>price: 25000</p>
        <p>count: 5</p>
    </div>
    <button class="btn" onclick="basket.addProduct(products.product_3)">Добавить в корзину</button>
</div>
</div>`;
const products = {
    product_1: {
        nameProduct: 'Камера',
        model: 'K-499',
        price: 5600,
        count: 0,
        allPrice: 0
    },
    product_2: {
        nameProduct: 'Видеорегистратор',
        model: 'V-499',
        price: 7800,
        count: 0,
        allPrice: 0
    },
    product_3: {
        nameProduct: 'Контроллер',
        model: 'Kt-499',
        price: 25000,
        count: 0,
        allPrice: 0
    }
};
const basket = {
    goods: {
        //    'Камера': 5600,
        //    'Видеорегистратор': 7800,
        //    'Контроллер': 25000
    },
    checkBasket() {
        if (document.getElementById('basket').innerHTML == '') {
            document.getElementById('basket').innerHTML = 'Корзина пуста';
        }
    },
    countBasketPrice() {
        let summ = products.product_1.allPrice + products.product_2.allPrice + products.product_3.allPrice;
        return summ;
    },
    countGoods() {
        if (document.querySelector('.countGoods').innerHTML == '') {
            let count = document.querySelector('.countGoods').innerHTML;
            count = 1;
            return count;
        }
        else {
            let count = document.querySelector('.countGoods').innerHTML;
            count++;
            return count;
        }
    },
    outputGoods() {
        let tag_basket = document.getElementById('basket');
        tag_basket.innerHTML = `<p>В корзине всего товаров - <span class="countGoods">${this.countGoods()}</span></p>
                                <p>Общая сумма покупки составляет - <span class="summBasket">${this.countBasketPrice()}</span></p>`
        return tag_basket;
    },

    addProduct(product) {
        this.goods[product.nameProduct] = product.price;
        product.count++;
        product.allPrice = product.count * product.price;
        
        if (document.querySelector('.countGoods') == null){
            document.getElementById('basket').innerHTML = `<p>В корзине всего товаров - <span class="countGoods">1</span></p>
            <p>Общая сумма покупки составляет - <span class="summBasket">${product.price}</span></p>`
        }
        else {
            this.outputGoods();
        }
        this.countGoods();
    },
    clearBasket() {
        document.getElementById('basket').innerHTML = '';
        this.goods = {};
        this.checkBasket();
        products.product_1.count = 0;
        products.product_2.count = 0;
        products.product_3.count = 0;
        products.product_1.allPrice = 0;
        products.product_2.allPrice = 0;
        products.product_3.allPrice = 0;

    }
};
basket.checkBasket();

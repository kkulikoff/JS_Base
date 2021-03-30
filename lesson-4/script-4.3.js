// 3.* Подумать над глобальными сущностями. 
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
// но и для каталога. Стремиться нужно к тому, 
// чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
// но в разных местах давал возможность вызывать разные методы.


// Вопрос к преподавателю:
// Можно писать вместо '' - String, вместо 0 - Number, вместо true и false - Boolean, так как я сделал это здесь?

const goods = {
    product: {
        id: Number,
        nameProduct: String,
        model: String,
        price: Number,
        count: Number,
        options: String,
        image: URL,
        availability: Boolean, // доступность
        description: String
    },
    manufacturer: {
        id: Number,
        nameManufacturer: String,
        description: String,
        logo: URL,
        countProduct: Number // общее количество товаров производителя
    },
    category: {
        id: Number,
        nameCategory: String,
        description: String,
        image: URL,
        availability: Boolean, // доступность
        countProduct: Number // общее количество товаров в категории
    },
    buyer: {
        id: Number,
        login: String,
        password: String, // как-то зашифровать
        group: String, // редкий, частый, VIP
        contacts: {
            telephone: Number,
            email: String,
            address: String
        },
        ipAddress: String,
        status: String, // онлайн, оффлайн, удалён, давно не посещал
        discounts: Number, // количество скидоных баллов
    },
    order: {
        idBuyer: Number, // id покупателя сделавшего заказ
        idProduct: Number, // id товара в корзине (заказе)
        countsProduct: Number,
        priceProduct: Number, // цена каждого товара в заказе
        priceOrder: Number, // суммарная цена всех товаров в заказе
        deliveryMethod: String, // способ доставки
        paymentMethod: String, // способ оплаты
        status: String, // в обработке, выполнен, отклонен
        comments: String // заполняется пользователем при оформлении заказа
    }
};

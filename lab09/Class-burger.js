function Hamburger(size, stuffing) {
    if(!size)
        throw new HamburgerException('size is empty');
    if(!stuffing)
        throw new HamburgerException('stuffing is empty');
    if(size.type != 'SIZE')
        throw new HamburgerException('invalid size');
    if(stuffing.type != 'STUFFING')
        throw new HamburgerException('invalid stuffing');

    this._size = size;
    this._stuffing = stuffing;
    this._topping = [];

}
Hamburger.SIZE_SMALL = {
    name: 'SMALL',
    type: 'SIZE',
    price: 50,
    calories: 20
};
Hamburger.SIZE_LARGE = {
    name: 'LARGE',
    type: 'SIZE',
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    name: 'CHEESE',
    type: 'STUFFING',
    price: 10,
    calories: 20
};
Hamburger.STUFFING_SALAD = {
    name: 'SALAD',
    type: 'STUFFING',
    price: 20,
    calories: 5
};
Hamburger.STUFFING_POTATO = {
    name: 'POTATO',
    type: 'STUFFING',
    price: 15,
    calories: 10
};
Hamburger.TOPPING_MAYO = {
    name: 'MAYO',
    type: 'TOPPING',
    price: 20,
    calories: 5
};
Hamburger.TOPPING_SPICE = {
    name: 'SPICE',
    type: 'TOPPING',
    price: 15,
    calories: 0
};

Hamburger.prototype.addTopping = function(topping) {
    if (!topping)
        throw new HamburgerException('topping is empty');
    if (topping.type != 'TOPPING')
        throw new HamburgerException('invalid topping');
    else {
        if (this._topping.indexOf(topping) == -1)
            this._topping.push(topping);
        else
            throw new HamburgerException('topping ' + topping.name + ' is exist');
    }
};
Hamburger.prototype.removeTopping = function(topping) {
    if (!topping)
        throw new HamburgerException('topping is empty');
    if (topping.type != 'TOPPING')
        throw new HamburgerException('invalid topping');
    else {
        if (this._topping.indexOf(topping) != -1)
            this._topping.splice(this._topping.indexOf(topping), 1);
        else
            throw new HamburgerException('topping ' + topping.name + " isn't exist");
    }
};
Hamburger.prototype.getToppings = function () {
    return this._topping;
};

Hamburger.prototype.getSize = function () {
    return this._size;
};
Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    let price = 0;
    for (let i = 0; i < this._topping.length; i++)
        price += this._topping[i].price;
    return price + this._size.price + this._stuffing.price;
};
Hamburger.prototype.calculateCalories = function () {
    let calories = 0;
    for (let i = 0; i < this._topping.length; i++)
        calories += this._topping[i].calories;
    return calories + this._size.calories + this._stuffing.calories;
};


function HamburgerException(property) {
    Error.call(this, property);

    this.name = 'HamburgerException';
    this.property = property;
    this.message = "Ошибка в свойстве " + property;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HamburgerException);
    } else {
        this.stack = (new Error()).stack;
    }
}

var animal = {
    eat: function() {
        this.full = true;
    }
};
var rabbit = { __proto__: animal };

rabbit.eat();

//Спрацює. Буде записано в  об’єкт rabbit

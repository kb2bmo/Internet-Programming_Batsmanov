let Hamburger = (function() {
    'use strict';

    class Hamburger_size {
        constructor(name, price, calories) {
            this.name = name;
            this.price = price;
            this.calories = calories;
        }
    }
    class Hamburger_stuffing {
        constructor(name, price, calories) {
            this.name = name;
            this.price = price;
            this.calories = calories;
        }
    }
    class Hamburger_topping {
        constructor(name, price, calories) {
            this.name = name;
            this.price = price;
            this.calories = calories;
        }
    }
    class Hamburger {
        constructor(size, stuffing) {
            if (!size) {
                throw new HamburgerException('size');
            }

            if (!(size instanceof Hamburger_size)) {
                throw new HamburgerException(`invalid size '${size.name}'`);
            }

            if (!stuffing) {
                throw new HamburgerException('stuffing');
            }

            if (!(stuffing instanceof Hamburger_stuffing)) {
                throw new HamburgerException(`invalid stuffing '${stuffing.name}'`);
            }

            this.size = size;
            this.stuffing = stuffing;
            this.toppings = [];
        }

        addTopping(topping) {
            if (!topping) {
                throw new HamburgerException('topping');
            }

            if (!(topping instanceof Hamburger_topping)) {
                throw new HamburgerException(`invalid topping '${topping.name}'`);
            }

            let topp = this.toppings.find(t => {
                return t.name === topping.name
            });

            if (topp) {
                throw new HamburgerException(`duplicate topping '${topping.name}'`);
            }

            this.toppings.push(topping);
        }
        removeTopping(topping) {
            if (!topping) {
                throw new HamburgerException('topping');
            }

            if (!(topping instanceof Hamburger_topping)) {
                throw new HamburgerException(`invalid topping '${topping.name}'`);
            }

            let length = this.toppings.length;

            this.toppings = this.toppings.filter(t => {
                return t !== topping;
            });

            if (length === this.toppings.length) {
                throw new HamburgerException(`topping not exists '${topping.name}'`);
            }
        }
        getToppings() {
            return this.toppings.slice();
        }

        getSize() {
            return this.size;
        }
        getStuffing() {
            return this.stuffing;
        }

        calculatePrice() {
            let price = this.size.price + this.stuffing.price;

            this.toppings.forEach(topping => {
                price += topping.price;
            });

            return price;
        }
        calculateCalories() {
            let calories = this.size.calories + this.stuffing.calories;

            this.toppings.forEach(topping => {
                calories += topping.calories;
            })
            ;

            return calories;
        }

        static get SIZE_SMALL() {
            return size_small;
        }
        static get SIZE_LARGE() {
            return size_large;
        }
        static get STUFFING_CHEESE() {
            return stuffing_cheese;
        }
        static get STUFFING_SALAD() {
            return stuffing_salad;
        }
        static get STUFFING_POTATO() {
            return stuffing_potato;
        }
        static get TOPPING_MAYO() {
            return topping_mayo;
        }
        static get TOPPING_SPICE() {
            return topping_spice;
        }
    }

    const size_small = new Hamburger_size('Маленький', 50, 20),
        size_large = new Hamburger_size('Большой', 100, 40),
        stuffing_cheese = new Hamburger_stuffing('Сыр', 10, 20),
        stuffing_salad = new Hamburger_stuffing('Салат', 20, 5),
        stuffing_potato = new Hamburger_stuffing('Картофель', 15, 10),
        topping_mayo = new Hamburger_topping('Майонез', 20, 5),
        topping_spice = new Hamburger_topping('Приправа', 15, 0);

    return Hamburger;
})();

class HamburgerException extends Error {
    constructor(message) {
        super();

        this.name = 'HamburgerException';
        this.message = message;
    }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: %f", hamburger.calculateCalories());
console.log("Price: %f", hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Price with sauce: %f", hamburger.calculatePrice());
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1
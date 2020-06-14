let price = 0;
let calories = 0;
let hamburger;

Load();

document.getElementById('size').onchange = ChangeSize;
document.getElementById('stuffing').onchange = ChangeStuffing;
document.getElementById('reset').onclick = function () {
    location.reload();
};
document.getElementById('SPICE').onchange = function () {
    let checkBox = document.getElementById('SPICE');
    if(checkBox.checked)
        hamburger.addTopping(Hamburger.TOPPING_SPICE);
    else
        hamburger.removeTopping(Hamburger.TOPPING_SPICE);

    PriceAndCalories();
};
document.getElementById('MAYO').onchange = function () {
    let checkBox = document.getElementById('MAYO');
    if(checkBox.checked)
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
    else
        hamburger.removeTopping(Hamburger.TOPPING_MAYO);

    PriceAndCalories();
};
document.getElementById('submit').onclick = function () {
    alert('Замовлення успішно оформлене!');
};

function Load(){
    let sizeSelect = document.getElementById('size')[document.getElementById('size').selectedIndex].value;
    let stuffingSelect = document.getElementById('stuffing')[document.getElementById('stuffing').selectedIndex].value;

    var size, stuffing;

    if(sizeSelect.toUpperCase()=='SMALL')
        size = Hamburger.SIZE_SMALL;
    else if(sizeSelect.toUpperCase()=='BIG')
        size = Hamburger.SIZE_LARGE;

    if(stuffingSelect.toUpperCase()=='CHEESE')
        stuffing = Hamburger.STUFFING_CHEESE;
    else if(stuffingSelect.toUpperCase()=='SALAD')
        stuffing = Hamburger.STUFFING_SALAD;
    else if(stuffingSelect.toUpperCase()=='POTATO')
        stuffing = Hamburger.STUFFING_POTATO;

    hamburger = new Hamburger(size, stuffing);

    PriceAndCalories();
}
function ChangeSize() {
    let sizeSelect = document.getElementById('size')[document.getElementById('size').selectedIndex].value;
    let size;

    if(sizeSelect.toUpperCase()=='SMALL')
        size = Hamburger.SIZE_SMALL;
    else if(sizeSelect.toUpperCase()=='BIG')
        size = Hamburger.SIZE_LARGE;

    hamburger._size = size;

    PriceAndCalories();
}
function ChangeStuffing() {

    let stuffingSelect = document.getElementById('stuffing')[document.getElementById('stuffing').selectedIndex].value;
    let stuffing;

    if(stuffingSelect.toUpperCase()=='CHEESE')
        stuffing = Hamburger.STUFFING_CHEESE;
    else if(stuffingSelect.toUpperCase()=='SALAD')
        stuffing = Hamburger.STUFFING_SALAD;
    else if(stuffingSelect.toUpperCase()=='POTATO')
        stuffing = Hamburger.STUFFING_POTATO;

    hamburger._stuffing = stuffing;

    PriceAndCalories();
}
function PriceAndCalories() {
    price = hamburger.calculatePrice();
    calories = hamburger.calculateCalories();

    document.getElementById('price').innerHTML = 'Вартість: ' + price;
    document.getElementById('calories').innerHTML = 'Калоріїї: ' + calories;
}
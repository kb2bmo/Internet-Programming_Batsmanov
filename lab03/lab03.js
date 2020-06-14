//task1
function addclasstart (){
    var obj = {
        className: " "
    }
    let i =1
    while(i){
        let className= prompt("","");
        if(className==0)break;
        addClass(obj,className)
}
}
function addClass(obj, className) {

    let array = obj.className.split(" ")
    if(array.indexOf(className)==-1){
        array.push(className)
    }
    obj.className = array.join(" ")
    alert(obj.className)}
//task2
function kamelize() {
    str = prompt("", "my-short-string");
    alert(str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() +
        word.slice(1)).join(''));
}
//task3
function removeClass(obj, className) {
    cls = prompt("Введите название класса", "default class")
    obj = {
        className : "open menu menu"
    }
    if(obj.className.includes(cls)) {
        classid = obj.className.indexOf(cls);
        clslength = cls.length;
        let result = obj.className.slice(0, classid) + obj.className.slice(classid + clslength);
        alert(result);
    }

    else{
        alert("Такого класса не существует: " + obj.className) }

}
//task4
function filterRangeInPlace(arr,min,max) {
    arr = [-10, 4, 5, 17, 0, 1, -5, 12]
    alert(arr)
    min = prompt("min", "0")
    max = prompt("max", "10")
    arr = arr.filter(item => (min <= item && item <= max))
    alert(arr)
}
//task5
function reverseSort() {
    let arr = [44,51,11,0,18,-4,12,17,-9,10,-7]
    arr.sort((a,b)=>b-a);
    alert(arr)
}
//task6
function arraySort(arr) {
    arr =  ["HTML", "JavaScript", "CSS"]
    let arrSorted = [];
    for (let i = 0; i < arr.length; i++)
    {
        arrSorted[i] = arr[i]; }
    arrSorted.sort();
    alert(arr);
    alert(arrSorted);
}
//task7
function arraySortrnd(arr) {
    arr = [1, 2, 3, 4, 5];
    function compareRandom(){
        return Math.random() - 0.5; }
    arr.sort(compareRandom);
    alert(arr);
}
//task8
function ageSort(people) {
    let p1 = {name: "Вася", age: 17};
    let p2 = {name: "Маша", age: 12};
    let p3 = {name: "Вова", age: 44};
    let p4 = {name: "Даня", age: 19};

    people = [p1, p2, p3, p4];
    function Age(a, b) {
        if (a.age > b.age) return 1;
        else return -1; }
    people.sort(Age);
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].age + " " + people[i].name) }

}
//task9
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 10,
                next: null
            } }
    } };
function printList() {
    let tmp = list;
    while (tmp){
        alert((tmp.value));
        tmp = tmp.next; } }
//task10
function unique(arr) {
    arr = ["C++", "C#", "C++", "C#",
        "C", "C++", "JavaScript", "C++", "JavaScript"];
    let res = [];
    for (let str of arr){
        if(!res.includes(str)){
            res.push(str); } }
    alert(res,);
    alert(arr)}

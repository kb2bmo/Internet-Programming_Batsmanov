let searchButton = document.getElementById("searchBtn");
let statusDisplay = document.getElementById("status");
let primeContainer = document.getElementById("primeContainer");
let fromNumber = +document.getElementById("fromValue").value;
let toNumber = +document.getElementById("toValue").value;
Notification.requestPermission(newMessage);
function doSearch() {
    searchButton.disabled = true;
    fromNumber = document.getElementById("fromValue").value;
    toNumber = document.getElementById("toValue").value;
    worker = new Worker("PRIME.js");
    worker.onmessage = receivedWorkerMessage;
    worker.onerror = workerError;
    worker.postMessage(
        { from: fromNumber,
            to: toNumber
        } );
    function workerError(error) {
        statusDisplay.innerHTML = error.message; }
    statusDisplay.innerHTML = "Фоновый поток ищет простые числа (от "+
        fromNumber + " до " + toNumber + ") ..."; }
// Получение сообщений от Web Workers API
function receivedWorkerMessage(event) {
    let message = event.data;
    if (message.messageType === "PrimeList") {
        let primes = message.data;
        let primeList = "";
        for (let i=0; i<primes.length; i++) {
            primeList += primes[i];
            if (i !== primes.length-1) primeList += `<br>`; }
        localStorage["primeRes"] = primeList;
        primeContainer.innerHTML = primeList;
        if (primeList.length == 0) {
            statusDisplay.innerHTML = "Ошибка поиска."; }
        else {
            statusDisplay.innerHTML = "Простые числа найдены!";
            notifyRes(); }
        searchButton.disabled = false;
    }
    else if (message.messageType === "Progress") {
        statusDisplay.innerHTML = message.data + "% выполнено ..."; }
    function notifyRes() {
        let notification = new Notification("Поиск завершен!", {
            body: "Простые числа найдены.",
        })
    } }
function cancelSearch() {
    worker.terminate();
    worker = null;
    statusDisplay.innerHTML = "Поток остановлен.";
    searchButton.disabled = false;
}
// Сохранение результатов поиска
let loadData = localStorage.getItem("primeRes");
primeContainer.innerHTML = loadData;
function newMessage(permission) {
    if( permission != "granted" ) return false;
    let notify = new Notification("Спасибо за возможность оповещения Вас!"); }
// Напоминание об возвращении на страницу
function backNotify() {
    setTimeout(backMessage, 60000);
    document.removeEventListener("visibilitychange");
    function backMessage() {
        if (document.visibilityState == "hidden"){
            let notification = new Notification("Мы Вас давно не видели!", {
                body: "Не хотите вернуться?;-)"
            })} else return false;
    } }
document.addEventListener('visibilitychange', backNotify, false);
// Геолокация
navigator.geolocation.getCurrentPosition(
    function(position) {
        let userCoords = document.getElementById("userCoords");
        userCoords.innerHTML = 'Ваше текущее местомоложение (координаты): ' +
            position.coords.latitude + ", " + position.coords.longitude; } );
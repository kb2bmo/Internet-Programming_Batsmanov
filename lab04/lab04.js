function nowdate() {
    let date = new Date();
    let f_year = date.getFullYear();
    let month = date.getMonth();
    let d_month = date.getDate();
    let week_day = date.getDay();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    switch (month){
        case 0:
            month = "січня";
            break;
        case 1:
            month = "лютого";
            break;
        case 2:
            month = "березня";
            break;
        case 3:
            month = "квітня";
            break;
        case 4:
            month = "травня";
            break;
        case 5:
            month = "червня";
            break;
        case 6:
            month = "липня";
            break;
        case 7:
            month = "серпня";
            break;
        case 8:
            month = "вересня";
            break;
        case 9:
            month = "жовтня";
            break;
        case 10:
            month = "листопада";
            break;
        case 11:
            month = "грудня";
            break;
    }
    switch (week_day) {
        case 0:
            week_day = "неділя";
            break;
        case 1:
            week_day = "понеділок";
            break;
        case 2:
            week_day = "вівторок";
            break;
        case 3:
            week_day = "середа";
            break;
        case 4:
            week_day = "четвер";
            break;
        case 5:
            week_day = "п'ятниця";
            break;
        case 6:
            week_day = "субота";
            break;
    }
    nowitem = document.getElementById("task 1")
    nowitem.innerHTML =  `Дата: ${d_month} ${month} ${f_year} року <br> День: ${week_day}
<br> Час: ${hours}:${minute}:${sec}`;
}
function weekdate () {
    let date = new Date();
    let week_day = {
    dayNumber: "",
        dayName: "" };
    week_day.dayNumber = date.getDay();
    switch (week_day.dayNumber) {
        case 0:
            week_day.dayName = "неділя";
            break;
        case 1:
            week_day.dayName = "понеділок";
            break;
        case 2:
            week_day.dayName = "вівторок";
            break;
        case 3:
            week_day.dayName = "середа";
            break;
        case 4:
            week_day.dayName = "четвер";
            break;
        case 5:
            week_day.dayName = "п'ятниця";
            break;
        case 6:
            week_day.dayName = "субота";
            break;
    }
    nowitem = document.getElementById("task 2")
    nowitem.innerHTML =  `Номер: ${week_day.dayNumber} <br> День недели:${week_day.dayName}`;
}
function prevdate() {
    let date = new Date();
    let val = document.getElementById("text 3").value;
    date.setDate(date.getDate() - +val);
    let textprev = document.getElementById("task 3");
    textprev.innerHTML = `Дата: ${date}`;
}
function lastday() {
    let val = document.getElementById("text 4").value.split("-");
    let year = +val[0];
    let month = +val[1];
    let l_date = new Date(year, month, 0);
    let text_box = document.getElementById("task 4");
    text_box.innerHTML = `Последний день месяца: ${l_date}`;
}
function seconds() {
    let date = new Date();
    let time = {
        BeforeNext: "",
        AfterToday: ""
    };
    let s_past = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    let s_left = 86400 - s_past;
    time.AfterToday = s_past;
    time.BeforeNext = s_left;
    let text_box = document.getElementById("task 5");
    text_box.innerHTML = `Прошло с начала дня: ${s_past}<br>Осталось:${s_left}`;

}
function dateString() {
    let val = document.getElementById("text 6").value.split("-");
    let text_box = document.getElementById("task 6");
    text_box.innerHTML = `Отформатированная дата: ${val[2]}.${val[1]}.${val[0]}`;
  }
function dateSubstraction() {
    let val1 = document.getElementById("text 7.1").value;
    let val2 = document.getElementById("text 7.2").value;
    let date1 = new Date(val1.replace(/-/g, "/"));
    let date2 = new Date(val2.replace(/-/g, "/"));
    let res = Math.abs((date1 - date2)) / 1000 / 60 / 60 / 24;
    let text_box = document.getElementById("task 7");
    text_box.innerHTML = `Разница между датами: ${res} дн.`;
}
function formatDate() {
    let  val = document.getElementById("text 8");;
    // var time = new Date(val);
    var now = new Date();
    var res = now - val;

    var seconds = Math.floor(res/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    if(seconds<=1){
        let text_box = document.getElementById("task-8");
        text_box.innerHTML = `Прямо сейчас.`;
    }
if(minutes<1){
    let text_box = document.getElementById("task-8");
    text_box.innerHTML = `${seconds} назад`;
}
if(hours<1){
    let text_box = document.getElementById("task-8");
    text_box.innerHTML = `${minutes} назад.`;

}
else {

}
}
function dateAnotherFormats(date) {
    date = new Date();
    let val = document.getElementById("text 9").value;
    let year, month, day;
    if (val.includes(".")) {
        val = val.split(".");
    } else if (val.includes("-")) {
        val = val.split("-");
    } else if (val.includes("/")) {
        val = val.split("/") }
    year = val[2];
    month = val[1];
    day = val[0];
    date.setFullYear(year,month,day);
    let text_box = document.getElementById("task 9");
    text_box.innerHTML = `Дата: ${date}`;
}
let date10 = new Date();
let year10 = date10.getFullYear();
let month10 = date10.getMonth();
let day10 = date10.getDate();
function showdateru() {
    switch (month10){
        case 0:
        case "cічня":
        case "january":
            month10 = "января";
            break;
        case 1:
        case "лютого":
        case "february":
            month10 = "февраля";
            break;
        case 2:
        case "березня":
        case "march":
            month10 = "марта";
            break;
        case 3:
        case "квітня":
        case "april":
            month10 = "апреля";
            break;
        case 4:
        case "травня":
        case "may":
            month10 = "мая";
            break;
        case 5:
        case "червня":
        case "june":
            month10 = "июня";
            break;
        case 6:
        case "липня":
        case "july":
            month10 = "июля";
            break;
        case 7:
        case "серпня":
        case "august":
            month10 = "августа";
            break;
        case 8:
        case "вересня":
        case "september":
            month10 = "сентября";
            break;
        case 9:
        case "жовтня":
        case "october":
            month10 = "октября";
            break;
        case 10:
        case "листопада":
        case "november":
            month10 = "ноября";
            break;
        case 11:
        case "грудня":
        case "december":
            month10 = "декабря";
            break;
    }
    text_box = document.getElementById("task 10");
    text_box.innerHTML = `Ваша дата: ${day10} ${month10} ${year10} года.`;
    
}
function showdateuk() {
    switch (month10){
        case "января":
        case "january":
            month10 = "january";
            break;
        case 1:
        case "лютого":
        case "февраля":
            month10 = "february";
            break;
        case 2:
        case "березня":
        case "марта":
            month10 = "march";
            break;
        case 3:
        case "квітня":
        case "апреля":
            month10 = "april";
            break;
        case 4:
        case "травня":
        case "мая":
            month10 = "may";
            break;
        case 5:
        case "червня":
        case "июня":
            month10 = "june";
            break;
        case 6:
        case "липня":
        case "июля":
            month10 = "july";
            break;
        case 7:
        case "серпня":
        case "августа":
            month10 = "august";
            break;
        case 8:
        case "вересня":
        case "сентября":
            month10 = "september";
            break;
        case 9:
        case "жовтня":
        case "октября":
            month10 = "october";
            break;
        case 10:
        case "листопада":
        case "ноября":
            month10 = "november";
            break;
        case 11:
        case "грудня":
        case "декабря":
            month10 = "december";
            break;
    }
    text_box = document.getElementById("task 10");
    text_box.innerHTML = `Your date: ${day10} ${month10} ${year10}.`;
}
function showdateua() {
    switch (month10){
        case 0:
        case "january":
        case "января":
            month10 = "січня";
            break;
        case 1:
        case "february":
        case "февраля":
            month10 = "лютого";
            break;
        case 2:
        case "march":
        case "марта":
            month10 = "березня";
            break;
        case 3:
        case "april":
        case "апреля":
            month10 = "квітня";
            break;
        case 4:
        case "may":
        case "мая":
            month10 = "травня";
            break;
        case 5: case "june":
        case "июня":
            month10 = "червня";
            break;
        case 6:
        case "july":
        case "июля":
            month10 = "липня";
            break;
        case 7:
        case "august":
        case "августа":
            month10 = "серпня";
            break;
        case 8:
        case "september":
        case "сентября":
            month10 = "вересня";
            break;
        case 9:
        case "october":
        case "октября":
            month10 = "жовтня";
            break;
        case 10:
        case "november":
        case "ноября":
            month10 = "листопада";
            break;
        case 11:
        case "december":
        case "декабря":
            month10 = "грудня";
            break;
    }
    text_box = document.getElementById("task 10");
    text_box.innerHTML = `Ваша дата: ${day10} ${month10} ${year10} року.`;
}
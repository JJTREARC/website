//funkcja ze studentem
function Student(name, lastname, age, scholarship, year) {
    this.Name = name;
    this.LastName = lastname;
    this.Age = age;
    this.Scholarship = scholarship;
    this.Year = year;

}



var Johnny = new Student('John', 'Gruz', 22, true, 2);

var p = document.getElementById("woda");
var txt = document.createTextNode("student:" + Johnny.Name + Johnny.LastName + ',' + Johnny.Age + ',' + Johnny.Scholarship + ',' + Johnny.Year);
p.appendChild(txt);



//dzien slownie
var day = new Date();
var nazwy = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']

var dayInput = document.getElementById("day");
var dayTxt = document.createTextNode(nazwy[day.getDay() - 1]);
dayInput.appendChild(dayTxt); //tak niby się teraz powinno robić ale zbyt dużo roboty

//data full
function Data() {
    var date = new Date();
    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipeic', 'sierpien', 'wrzesień', 'paździenrik', 'listopad', 'grudzien']
    var currentDate = date.getDay() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("date").outerHTML = currentDate;

}
Data();

//wartosc bezwzgleda
function Absolute() {
    var a = window.prompt();
    const letters = /^[0-9\-.^()]+$/
    if (a.match(letters)) {
        if (a > 0) {
            document.getElementById("Absolute").innerText = a;


        } else {
            a *= -1
            document.getElementById("Absolute").innerText = a;
        }
    } else {
        alert("zły inpyut")
    }
}

//rand7gen
function GenRand() {
    decimalPlaces = -3;
    var a = Math.floor(Math.random() * 8999999) + 1000000;
    var decimal = Math.floor(Math.random() * 999) + 100;
    var power = Math.pow(10, decimalPlaces);
    var eq = a + (decimal * power);
    document.getElementById("GenRand").textContent = 'generowana liczba: ' + eq + '  ';
    document.getElementById("GenRandFloor").textContent = 'Math.floor: ' + Math.floor(eq) + '  ';
    document.getElementById("GenRandCeil").textContent = 'Math.ceil: ' + Math.ceil(eq) + '  ';
    document.getElementById("GenRandRound").textContent = 'Math.round: ' + Math.round(eq);
}

//classUczen

class Uczen {
    constructor(nazwisko, imie, wiek) {
        this.Nazw = nazwisko;
        this.Imie = imie;
        this.Wiek = wiek;
        this.Overview = nazwisko + '  ' + imie + '  ' + wiek + ' lat';

    }
}

let Ucz1 = new Uczen("Andrzej", "Wqegqe", 2021)
let Ucz2 = new Uczen("Henry", "Mtvdsae", 987)
let Ucz3 = new Uczen("Arkadiusz", "Tutkne", 1)
document.getElementById("uczen").textContent = Ucz1.Overview + '  ' + Ucz2.Overview + '  ' + Ucz3.Overview;

//array10
function array10() {

    var numArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 899) + 100);
    // var numString = numArray.toString() // to można zrobic dla quality of life

    function numDesc() {
        numArray.sort();
        numArray.reverse();
        return numArray;
    }


    function numAsc() {

        return numArray.sort();
    }

    document.getElementById("array").textContent = numArray;
    document.getElementById("arraySortDesc").textContent = 'sort malejąco:  ' + numDesc();
    document.getElementById("arraySortAsc").textContent = 'sort rosnoco   ' + numAsc();
}

array10();
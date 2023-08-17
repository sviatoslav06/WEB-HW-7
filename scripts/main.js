//Task 1 ----------------------------------------------------------------------
let time = {
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),

    print: function () {
        console.log(time.hours + ':' + time.minutes + ':' + time.seconds);
    },
    addSecond() {
        this.seconds++;
        if (this.seconds > 60) {
            this.minutes++;
            this.seconds = 0;
            if (this.minutes > 60) {
                this.hours++;
                this.minutes = 0;
                if (hours > 23) {
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                }
            }
        }
    },
    minusSecond() {
        this.seconds--;
        if (this.seconds < 0) {
            this.minutes--;
            this.seconds = 59;
            if (this.minutes < 0) {
                this.hours--;
                this.minutes = 59;
                if (this.hours < 0) {
                    this.hours = 23;
                    this.minutes = 59;
                    this.seconds = 59;
                }
            }
        }
    },
    showOnScreen() {
        document.write('<p>' + time.hours + ':' + time.minutes + ':' + time.seconds + '</p>');
    }
};

//1
time.print();

//2
time.addSecond();
time.print();

//3
time.minusSecond();
time.print();

//4
time.showOnScreen();


//Task 2 ----------------------------------------------------------------------
let car =
{
    producer: '',
    model: '',
    year: 0,
    speed: 0,

    print: function () {
        console.log('Model : ' + model + '\n' + 'Producer :' + producer + '\n' + 'Year :' + year + '\n' + 'Speed :' + speed);
    },

    set(producer, model, year, speed) {
        this.producer = producer;
        this.model = model;
        this.year = year;
        this.speed = speed;
    },

    showOnScreen() {
        document.write('<p>' + 'Model : ' + model + '<br>' + 'Producer :' + producer + '<br>' + 'Year :' + year + '<br>' + 'Speed :' + speed + '</p>');
    },

    timeRange(range) {
        let t = speed / range;
        for (let i = 0; i < t; i++) {
            if (i % 4 == 0) {
                t++;
            }
        }
        console.log('To drive ' + range + 'km' + ' you must spend ' + t + ' hours')
    }
}

let producer = prompt('Enter producer of car :', 'Mercedes-Benz');
let model = prompt('Enter model of car :', 'E-500');
let year = prompt('Enter year of car :', '2016');
let speed = prompt('Enter speed of car :', '216');
car.set(producer, model, year, speed);

//1
car.showOnScreen();

//2
let range = prompt('Enter range(km) :', '100');
car.timeRange(range);


//Task 3 ----------------------------------------------------------------------
let a = prompt('Enter some text :');

let countWhiteSpace = 0;

//1
function spaces(b) {
    for (let i = 0; i < a.length; i++) {
        if (b[i].indexOf(' ') != -1) {
            countWhiteSpace++;
        }
    }
    console.log(countWhiteSpace);
}

spaces(a);

//2
function makeUpper(b) {
    b[0].toUpperCase();
    console.log(b);
}

makeUpper(a);

//3
function words(b) {
    let w = b.split(' ');
    console.log(w.length);
}

words(a);

//4
function palindrom(b) {
    let s = b.split(' ').reverse().join(' ');
    if (b == s) {
        console.log('Цей рядок є паліндромом');
    }
    else {
        console.log('Цей рядок не є паліндромом');
    }
}

palindrom(a);

//5
let couplewords = prompt('Введіть словосполучення :');

function short(b) {
    switch (b) {
        case 'cascading style sheets':
            console.log('CSS');
            break;
        case 'об`єктно орієнтоване програмування':
            console.log('ООП');
            break;
        default:
            break;
    }
}

short(couplewords);
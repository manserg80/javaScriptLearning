"use strict";
let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberyFilms() {
    for (let i =0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классичекий зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

console.log(personalMovieDB);

function calculateVolumeAndArea() {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

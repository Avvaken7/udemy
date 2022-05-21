"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () { //Метод, который вызывает функцию Вопроса пользователю
        for (let i = 0; i < 2; i++) {
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
    },
    detectPersonalLevel: function () { //Метод, который вызывает функцию Персонального ур. просмотра
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
        
    },
    showMyDB: function () { //Метод, который вызывает функцию Показа базы данных
        if (personalMovieDB.privat == false) {
            console.log (personalMovieDB);
        }
    },
    writeYourGenres: function () { //Метод, который вызывает функцию Показа жанров
        for (let i = 1; i <= 3; i++) {            
            let j = personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (j != null && j != '') {
                console.log('Выполнены условия заполнения поля');
            } else {
                i--;
            }            
        }
        personalMovieDB.genres.forEach(function(elem,i,genres) {
            console.log('Любимый жанр под номером #',i+1 + '- это', elem);
        });
    },
    toggleVisibleMyDB: function() { //Метод, который вызывает функцию измен. privat
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }else {
            personalMovieDB.privat = false;
        }
    }
};
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);





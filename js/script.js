/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
console.log('hello');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelectorAll('.promo__genre')[0];
const bg = document.querySelectorAll(".promo__bg")[0];
const movieList = document.querySelectorAll(".promo__interactive-list")[0];

console.log(adv);
console.log(genre);
console.log(bg);

adv.forEach((item) => {
    item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = "url('img/bg.jpg')";

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, index)=>{
    movieList.innerHTML += `<li class="promo__interactive-item"> ${index +1} ${film}
                            <div class="delete"></div>
                        </li>`;
});



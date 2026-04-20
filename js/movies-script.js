"use strict";

const movies = [
  {
    id: 1,
    titel: "Inception",
    genre: "Science-fiction",
    year: "2010",
    duration: "2.28",
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },

  {
    id: 2,
    titel: "The Dark Knight",
    genre: "Action",
    year: "2008",
    duration: "2.32",
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },

  {
    id: 3,
    titel: "Forrest Gump",
    genre: "Drama",
    year: "1994",
    duration: "2.22",
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },

  {
    id: 4,
    titel: "Superbad",
    genre: "Comedy",
    year: "2007",
    duration: "1.53",
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },

  {
    id: 5,
    titel: "It",
    genre: "Horror",
    year: "2017",
    duration: "2.15",
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },

 {
    id: 6,
    titel: "The Hangover",
    genre: "Comedy",
    year: "2009",
    duration: "1.4",
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/"
 },

 {
    id: 7,
    titel: "The Conjuring",
    genre: "Horror",
    year: "2013",
    duration: "1.52",
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/"
 },

 {
    id: 8,
    titel: "Interstellar",
    genre: "Science-fiction",
    year: "2014",
    duration: "2.55",
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/"
 },

 {
    id: 9,
    titel: "The Matrix",
    genre: "science-fiction",
    year: "1999",
    duration: "3.02",
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/"
 },

 {
    id: 10,
    titel: "Pulp Fiction",
    genre: "drama",
    year: "1994",
    duration: "1.39",
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/"
 }
];

const moviesContainer = document.querySelector("#movies-container");

const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

function filterMovies() {
  const selectedValue = selectedCategory.value;
  const searchTerm = searchInput.value.toLowerCase().trim();

}




function displayMovies(moviesList) {
  moviesContainer.innerHTML += "";
  const html = moviesList.map((item) => {
    return `
    <article>
    <h2>${item.titel}</h2>
    <ul>
        <li>Genre: ${item.genre}</li>
        <li>År: ${item.year}</li>
        <li>Varighed: ${item.duration}</li>
    </ul>
    <figure>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">
            <img src="${item.img}" alt="${item.titel}">
        </a>
        <figcaption>Læs mere på IMDB</figcaption>
    </figure>
    </article>
    `;
  })
  .join("");
  moviesContainer.innerHTML = html;
}
displayMovies(movies);

// Import stylesheets
import './style.css';

// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.com/v3.1/all

fetch('https://restcountries.com/v3.1/all')
  .then((resalt) => resalt.json())
  .then((data) => {
    data.forEach((item) => {
      // console.log(item);
      let elem = `
      <tr>
      <td>${item.cca2}</td>
      <td><img class='img' src = ${item.flags.png} /></td>\
      <td>${item.name.official}</td>
      <td>${item.capital}</td>
      <td>${item.population}</td>
      </tr> `;
      $('tbody').append(elem);
    });
  });

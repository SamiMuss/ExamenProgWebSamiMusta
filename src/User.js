"use strict";

import getTable from "./app.js";


const containerElement = document.createElement("section");
containerElement.classList.add("renderTable");

const renderTable = (table) => {
  const html = table
    .map((data) => { 
      return `<counter>
      <div class="user" data-present="false">
  <img src="${results.picture}">
  <div class="user--info">
      <h1>${results.name}</h1>
      <p>${results.age} years old</p>
      <p>Baak, Netherlands</p>
  </div>
  <a href="mailto:mareike.bottenberg@example.com">
      <span class="mail">✉️</span>
  </a>
</div>
      </counter>`;
    })
    .join("");
  board.insertAdjacentHTML("afterbegin", html);
};

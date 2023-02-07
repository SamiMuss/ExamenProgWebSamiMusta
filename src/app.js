"use strict";

const counter = document.querySelector(".counter");

const getTable = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://randomuser.me/api/?results=20`);
  request.send();

  //Lorsque la réponse est reçue, un événement "load" est déclenché et la
  //fonction anonyme associée à ce dernier est appelée.
  //Cette fonction parse les données reçues en utilisant JSON.parse()

  request.addEventListener("load", (e) => {
    const data = JSON.parse(request.responseText);
    console.log(data);
  });
};




getTable();
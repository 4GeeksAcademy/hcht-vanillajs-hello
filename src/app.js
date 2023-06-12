/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Write your code here

  var person1 = {
    name: 'Jhon',
    lastname: 'Doe',
    gender: 'male',
    age: 35,
    sports: ['golf', 'basketball']
  }

  var person2 = {
    name: 'Jane',
    lastname: 'Doe',
    gender: 'female',
    age: 30,
    sports: ['soccer', 'tennis', 'running']
  }

  var person3 = {
    name: 'Jimmy',
    lastname: 'Doe',
    gender: 'male',
    age: 12,
    sports: ['rugby', 'soccer', 'cricket']
  }

  var family = {
    lastname: 'Doe',
    members: [person1, person2, person3]
  }

  // listado de los deportes que practica la familia (no importa si se repiten)
  function lisrAllSportsFamily(anFamily) {
    var result = '';
    for (const key in anFamily) {
        // Opción 1
        // console.log('anFamily', key, anFamily[key].sports)
        // Opción 2
        const element = anFamily[key];
        // console.log('element', key, element.sports);
        for (const key in element.sports) {
            const item = element.sports[key];
            // console.log(item)
            // result.push(item)
            result += '<li class="list-group-item">' + item + '</li>'
        }
    }
    return result
  }

  let miTitulo = document.querySelector("#title");
  miTitulo.innerHTML = 'Por lo que queramos!';

  let miParrafo = document.querySelector('#parrafo');
  miParrafo.innerHTML = 'Alert amarillo';

  let miFoother = document.querySelector('#foother');
  miFoother.innerHTML = 'Con mucho amor de la cohorte Spain 44';

  let miLista = document.querySelector('#listaSports');
  // miLista.innerHTML = '<li class="list-group-item">running</li><li class="list-group-item">cricket</li><li class="list-group-item">soccer</li>'
  miLista.innerHTML = lisrAllSportsFamily(family.members)


  console.log(lisrAllSportsFamily(family.members));

  console.log("Hello Rigo from the console!");
};

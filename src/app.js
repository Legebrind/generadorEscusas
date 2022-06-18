/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(base) {
    return Math.floor(Math.random() * base);
  }
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var aImprimir =
    who[aleatorio(4)] +
    " " +
    action[aleatorio(4)] +
    " " +
    what[aleatorio(3)] +
    " " +
    when[aleatorio(5)];
  document.getElementById("mensaje").innerHTML = aImprimir;

  console.log("Hello Rigo from the console!");
};

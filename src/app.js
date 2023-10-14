/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello world");

  let pronouns = ["the", "our", "your"];
  let adjectives = ["great", "big", "small"];
  let nouns = ["racoon", "apple", "cat"];
  let domains = [".com", ".net"];

  function iteracionesDeArreglos(arr1, arr2, arr3, arr4) {
    for (let value1 of arr1) {
      for (let value2 of arr2) {
        for (let value3 of arr3) {
          for (let value4 of arr4)
            console.log(value1 + value2 + value3 + value4);
        }
      }
    }
  }

  iteracionesDeArreglos(pronouns, adjectives, nouns, domains);
};

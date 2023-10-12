/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello world");

  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "small"];
  let nouns = ["racoon", "apple", "cat"];
  let domain = [".com", ".net"];

  function iteracionesDeArreglos(arr1, arr2, arr3, arr4) {
    for (let arr0Index = 0; arr0Index < arr1.length; arr0Index++) {
      for (let arr2Index = 0; arr2Index < arr2.length; arr2Index++) {
        for (let arr3Index = 0; arr3Index < arr3.length; arr3Index++) {
          for (let arr4Index = 0; arr4Index < arr4.length; arr4Index++)
            console.log(
              arr1[arr0Index] +
                arr2[arr2Index] +
                arr3[arr3Index] +
                arr4[arr4Index]
            );
        }
      }
    }
  }

  iteracionesDeArreglos(pronoun, adj, nouns, domain);
};

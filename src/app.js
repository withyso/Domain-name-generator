/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello world");

  let pronoun = ["the", "our", "their", "your"];
  let adj = ["great", "big", "small", "tall", "fast", "fat"];
  let nouns = ["racoon", "apple", "orange", "cat", "dog", "burger"];
  let domain = [".com", ".es", ".gob", ".net"];

  for (let i = 0; i < 4; i++) {
    console.log(`${pronoun[i]}` + `${adj[i]}` + `${nouns[i]}` + `${domain[i]}`);
  }

  let randomWord = element => {
    let randomIndex = Math.floor(Math.random() * element.length);
    return element[randomIndex];
  };

  for (let i = 0; i < 15; i++) {
    console.log(
      `${randomWord(pronoun)}` +
        `${randomWord(adj)}` +
        `${randomWord(nouns)}` +
        `${randomWord(domain)}`
    );
  }
};

"use strict";

const bodyClone = document.querySelector(".dark-clone");
const modeBtn = document.querySelector(".mode");
const header = document.querySelector(".head");
const headLinks1 = document.querySelector(".head-link1");
const headLinks2 = document.querySelector(".head-link2");
const clone = document.querySelector(".clone-main");
const footer = document.querySelector(".bottom-page");
const offered = document.querySelector(".offered");
const searchBtns1 = document.querySelector(".dark-btn1");
const searchBtns2 = document.querySelector(".dark-btn2");
const input = document.querySelector(".input-drk");
const search = document.querySelector(".search-container input");

modeBtn.addEventListener("click", function () {
  if (modeBtn.innerText === "Darkmode") {
    bodyClone.style.backgroundColor = "#222";
    headLinks1.style.color = "#fff";
    headLinks2.style.color = "#fff";
    footer.style.color = "#fff";
    offered.style.color = "#fff";
    search.style.color = "#333";
    searchBtns1.style.backgroundColor = "#333";
    searchBtns2.style.backgroundColor = "#333";
    input.style.backgroundColor = "#333";
    modeBtn.innerText = "Lightmode";
  } else {
    bodyClone.style.backgroundColor = "#fff";
    headLinks1.style.color = "#222";
    headLinks2.style.color = "#222";
    footer.style.color = "#222";
    offered.style.color = "#222";
    search.style.color = "#fff";
    searchBtns1.style.backgroundColor = "#fff";
    searchBtns2.style.backgroundColor = "#fff";
    input.style.backgroundColor = "#fff";
    modeBtn.innerText = "Darkmode";
  }
});

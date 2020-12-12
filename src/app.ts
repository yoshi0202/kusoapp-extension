import {Example}  from "./example";

const example:Example = new Example("test", 30);
const roundBtn:HTMLElement | null = document.getElementById("round_start");
const roundImg:HTMLElement | null = document.getElementById("roundImg");
const hiddenImg:Element = document.getElementsByClassName("roundImg")[0];
roundBtn && roundImg && hiddenImg && (roundBtn.onclick = function() {
  roundImg.style.display = "none"
  hiddenImg.setAttribute("style", "display: block;")
})

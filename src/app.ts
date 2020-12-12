import {Example}  from "./example";

const example:Example = new Example("test", 30);
const roundImg:HTMLElement | null = document.getElementById("roundImg");
const hiddenImg:Element = document.getElementsByClassName("roundImg")[0];
roundImg && hiddenImg && (roundImg.onclick = function() {
  roundImg.style.display = "none"
  hiddenImg.setAttribute("style", "display: block;")
})

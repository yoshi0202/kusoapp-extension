import {HtmlService}  from "./HtmlService";

const htmlService:HtmlService = new HtmlService()
const wrapper:HTMLElement | null = document.querySelector("#content_wrapper")
const pngImg:HTMLElement | null = document.querySelector(".round_png")
const gifImg:HTMLElement | null = document.querySelector(".round_gif")
wrapper && pngImg && gifImg && (wrapper.onclick = function() {
  htmlService.addCount()
  if(htmlService.getCount() === htmlService.getMaxCount()) {
    htmlService.setCount(0)
    htmlService.changeDisplayStyle(pngImg, "none")
    htmlService.changeDisplayStyle(gifImg, "block")
  } else {
    htmlService.changeDisplayStyle(pngImg, "block")
    htmlService.changeDisplayStyle(gifImg, "none")
  }
  // roundImg.style.display = "none"
  // hiddenImg.setAttribute("style", "display: block;")
  console.log(htmlService.getCount())
})

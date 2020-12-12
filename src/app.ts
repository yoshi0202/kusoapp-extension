import {HtmlService}  from "./HtmlService";

const htmlService:HtmlService = new HtmlService()
const wrapper:HTMLElement | null = document.querySelector("#content_wrapper")
const pngImg:HTMLElement | null = document.querySelector(".round_png")
const gifImg:HTMLElement | null = document.querySelector(".round_gif")
wrapper && pngImg && gifImg && (wrapper.onclick = function() {
  htmlService.addCount(1)
  if(htmlService.getCount() === htmlService.getMaxCount()) {
    htmlService.setCount(0)
    htmlService.setSpeed(10)
    htmlService.toggleDisplayImg(pngImg, gifImg)
  } else {
    htmlService.toggleDisplayImg(gifImg, pngImg)
    htmlService.divSpeed()
    htmlService.changeRotateSpeedToElement(pngImg)
  }
})

import {HtmlService}  from "./HtmlService";

const MAX_COUNT:number = 10
const htmlService:HtmlService = new HtmlService()
const wrapper:HTMLElement | null = document.querySelector("#content_wrapper")
const pngImg:HTMLElement | null = document.querySelector(".round_png")
const gifImg:HTMLElement | null = document.querySelector(".round_gif")

wrapper && pngImg && gifImg && (wrapper.onclick = function() {
  if(gifImg.style.display === "block") {
    htmlService.init(pngImg, gifImg, MAX_COUNT)
    return
  }
  htmlService.addCount(1)
  if(htmlService.getCount() === MAX_COUNT) {
    htmlService.toggleDisplayImg(pngImg, gifImg)
  } else {
    htmlService.divSpeed()
    htmlService.changeRotateSpeedToElement(pngImg)
  }
})

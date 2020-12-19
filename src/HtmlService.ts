export class HtmlService {
  private buttonCount: number = 0
  private speed: number = 10
  
  init(pngImg: HTMLElement, gifImg: HTMLElement, initSpeed: number): void {
    this.setCount(0)
    this.setSpeed(0)
    this.changeRotateSpeedToElement(pngImg)
    this.toggleDisplayImg(gifImg, pngImg)
    this.setSpeed(initSpeed)
  }

  setCount(num: number): void {
    this.buttonCount = num 
  }

  addCount(num: number): void {
    this.buttonCount += num
  }

  getCount(): number {
    return this.buttonCount
  }

  setSpeed(num: number): void {
    this.speed = num 
  }

  divSpeed(): void {
    this.speed = this.speed / 2
  }

  changeDisplayStyle(elem: HTMLElement, style: string): void {
    elem.style.display = style
  }

  changeRotateSpeedToElement(elem: HTMLElement): void {
    elem.style.animation = `rotation ${this.speed}s infinite linear`
  }

  toggleDisplayImg(noneElm: HTMLElement, blockElm: HTMLElement): void {
    this.changeDisplayStyle(noneElm, "none")
    this.changeDisplayStyle(blockElm, "block")
  }

}
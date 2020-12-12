export class HtmlService {
  private buttonCount: number = 0
  private initSpeed: number = 10
  protected maxCount: number = 10
  
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
    this.initSpeed = num 
  }

  divSpeed(): void {
    this.initSpeed = this.initSpeed / 2
    console.log(this.initSpeed)
  }

  getMaxCount(): number {
    return this.maxCount
  }

  changeDisplayStyle(elem: HTMLElement, style: string) {
    elem.style.display = style
  }

  changeRotateSpeedToElement(elem: HTMLElement) {
    elem.style.animation = `rotation ${this.initSpeed}s infinite linear`
  }

  toggleDisplayImg(noneElm: HTMLElement, blockElm: HTMLElement) {
    this.changeDisplayStyle(noneElm, "none")
    this.changeDisplayStyle(blockElm, "block")
  }

}
export class HtmlService {
  private buttonCount: number = 0
  protected maxCount: number = 10
  
  setCount(num: number): void {
    this.buttonCount = num 
  }

  addCount(): void {
    this.buttonCount += 1
  }

  getCount(): number {
    return this.buttonCount
  }

  getMaxCount(): number {
    return this.maxCount
  }

  changeDisplayStyle(elem: HTMLElement, style: string) {
    elem.style.display = style
  }

}
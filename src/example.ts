export class Example {
  constructor(private name:string, private age:number) {
    this.name = name
    this.age = age
  }

  getName() : string {
    return this.name
  }

  getAge() : number {
    return this.age
  }
}
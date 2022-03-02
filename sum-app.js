class SumApp {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  getSum() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    console.log(sum);
    return sum;
  }
  reset() {
    this.numbers = [];
  }
}
const sumApp = new SumApp();

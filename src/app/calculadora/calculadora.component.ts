import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  input: string = '';

  appendNumber(num: string) {
    this.input += num;
  }

  appendOperator(op: string) {
    const lastChar = this.input.slice(-1);
    if (['+', '-', '*', '/', '^'].includes(lastChar)) return;
    this.input += op;
  }

  clear() {
    this.input = '';
  }

  calculate() {
    try {
      if (this.input.includes('^')) {
        const [base, exponent] = this.input.split('^').map(Number);
        this.input = Math.pow(base, exponent).toString();
      } else {
        this.input = eval(this.input).toString();
      }
    } catch (error) {
      this.input = 'Erro';
    }
  }

  scientificFunction(func: string) {
    try {
      const value = parseFloat(this.input);
      switch (func) {
        case 'sin':
          this.input = Math.sin(value).toString();
          break;
        case 'cos':
          this.input = Math.cos(value).toString();
          break;
        case 'tan':
          this.input = Math.tan(value).toString();
          break;
        case 'sqrt':
          this.input = Math.sqrt(value).toString();
          break;
        case 'log':
          this.input = Math.log(value).toString();
          break;
        case 'log10':
          this.input = Math.log10(value).toString();
          break;
        case 'exp':
          this.input = Math.exp(value).toString();
          break;
        case 'factorial':
          this.input = this.factorial(value).toString();
          break;
        default:
          break;
      }
    } catch (error) {
      this.input = 'Erro';
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }
}

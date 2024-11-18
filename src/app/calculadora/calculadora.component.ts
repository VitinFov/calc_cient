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
    if (['+', '-', '*', '/'].includes(lastChar)) return;
    this.input += op;
  }

  clear() {
    this.input = '';
  }

  calculate() {
    try {
      this.input = eval(this.input).toString();
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
        case 'log':
          this.input = Math.log(value).toString();
          break;
        case 'sqrt':
          this.input = Math.sqrt(value).toString();
          break;
        default:
          break;
      }
    } catch (error) {
      this.input = 'Erro';
    }
  }
}

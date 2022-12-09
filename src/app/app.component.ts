import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  operandA = 0;
  operandB = 0;
  result = 0;

  add() {
    this.result = this.operandA + this.operandB;
  }
}

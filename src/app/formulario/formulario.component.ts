import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() registroResultado = new EventEmitter<number>();

  operandA = 0;
  operandB = 0;

  add() {
    let result = this.operandA + this.operandB;
    this.registroResultado.emit(result);
  }
}

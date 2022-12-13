import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  resultadoPadre = 0;

  valorResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent {

  index: number = 0;

  @Input() titulo: string;

  @Input() fotos: string[];

  changePhoto(index, symbol) {
    switch (symbol) {
      case '+':
        this.index = index < 4 ? index + 1 : index;
      break;

      case '-':
        this.index = index > 0 ? index - 1 : index;
      break;

      case '++':
        this.index = this.fotos.length - 1;
      break;

      case '--':
        this.index = 0;
      break;
    }
  }
}

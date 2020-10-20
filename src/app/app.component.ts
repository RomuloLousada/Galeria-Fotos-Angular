import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tituloAnimais: string = "Galeria de Fotos (Animais)";

  fotosAnimais: string[] = [
    'assets/photo1.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg',
    'assets/photo4.jpg',
    'assets/photo5.jpg',
  ]

  tituloPessoas: string = "Galeria de Fotos (Pessoas)";

  fotosPessoas: string[] = []
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 



@Component({
  imports: [],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class Libro {
  constructor(private router: Router) {}

  ngOnInit() {
    this.titulo = 'Bienvenido a la Biblioteca';
    this.autor = 'Autor desconocido'; 
  }

}

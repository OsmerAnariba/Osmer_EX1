
import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';


@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario: String = '';
  password: String = '';
  mensaje: String = ''; 

  constructor(private router: Router) {}

  ingresar() {
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.mensaje = 'Bienvenido, Administrador';
    } else if (this.usuario === 'user' && this.password === '123') {
      this.mensaje = 'Bienvenido, Usuario';
    } else {
      this.mensaje = 'Credenciales incorrectas';
    }

  }


}



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sesion } from 'src/app/core/models/sesion.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  sesionUsuario: Sesion;

  constructor( private authService: AuthService,
               private router: Router) {}

  ngOnInit() {
    this.sesionUsuario = new Sesion();
  }

  iniciarSesion(myForm: NgForm) {
    if (myForm.invalid) {
      return;
    } else {
      this.authService.iniciarSesion(this.sesionUsuario).subscribe(
        resp => {
          this.validarRol(resp);
        });
    }
  }

  validarRol(sesionInfo: any) {
      if (sesionInfo.estado === 'ok') {
          if (sesionInfo.rol === 'administrador') {
            this.router.navigateByUrl('/administrador');
          } else if (sesionInfo.rol === 'entrenador') {
            this.router.navigateByUrl('/entrenador');
          } else if (sesionInfo.rol === 'atleta') {
            this.router.navigateByUrl('/atleta');
          }
      }
  }
}

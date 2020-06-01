import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-administrador-home',
  templateUrl: './administrador-home.component.html',
  styleUrls: ['./administrador-home.component.css']
})
export class AdministradorHomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}

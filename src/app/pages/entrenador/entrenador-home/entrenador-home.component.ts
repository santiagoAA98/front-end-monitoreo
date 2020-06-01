import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-entrenador-home',
  templateUrl: './entrenador-home.component.html',
  styleUrls: ['./entrenador-home.component.css']
})
export class EntrenadorHomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}

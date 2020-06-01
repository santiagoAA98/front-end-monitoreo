import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-entrenador-evento',
  templateUrl: './entrenador-evento.component.html',
  styleUrls: ['./entrenador-evento.component.css']
})
export class EntrenadorEventoComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}

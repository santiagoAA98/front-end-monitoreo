import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-atleta-home',
  templateUrl: './atleta-home.component.html',
  styleUrls: ['./atleta-home.component.css']
})
export class AtletaHomeComponent implements OnInit {

  name = 'LEO';
  age = '19 AÑOS';
  telefono = '33333444';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}

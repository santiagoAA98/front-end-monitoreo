import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-observar-atleta',
  templateUrl: './observar-atleta.component.html',
  styleUrls: ['./observar-atleta.component.css']
})
export class ObservarAtletaComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}

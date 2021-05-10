import {Component, OnInit} from '@angular/core';
import {AuthService} from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-labs';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mostartMenu: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostartMenu = mostrar
    )
  }

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}

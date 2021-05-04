import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import {MeuPrimeiro2Component} from './meu-primeiro2/meu-primeiro2.component';
import {CursosModule} from './cursos/cursos.module';
import {DataBidingComponent} from './data-biding/data-biding.component';
import {FormsModule} from '@angular/forms';
import {MeuFormModule} from './meu-form/meu-form.module';
import {InputPropertyComponent} from './input-property/input-property.component';
import {OutputPropertyComponent} from './output-property/output-property.component';
import {CicloComponent} from './ciclo/ciclo.component';
import {DiretivasComponent} from './diretivas/diretivas.component';
import {DiretivaNgIfComponent} from './diretiva-ng-if/diretiva-ng-if.component';
import {DiretivaNgswitchComponent} from './diretiva-ngswitch/diretiva-ngswitch.component';
import {DiretivaNgforComponent} from './diretiva-ngfor/diretiva-ngfor.component';
import {CommonModule} from '@angular/common';
import {DiretivaNgclassComponent} from './diretiva-ngclass/diretiva-ngclass.component';
import {DiretivaNgstyleComponent} from './diretiva-ngstyle/diretiva-ngstyle.component';
import {OperadorElvisComponent} from './operador-elvis/operador-elvis.component';
import {ExemploNgContentComponent} from './exemplo-ng-content/exemplo-ng-content.component';
import {FundoAmareloDirective} from './shared/fundo-amarelo.directive';
import {DiretivasCustomizadasComponent} from './diretivas-customizadas/diretivas-customizadas.component';
import {HighlightMouseDirective} from './shared/highlight-mouse.directive';
import {HighlightDirective} from './shared/highlight.directive';
import {NgElseDirective} from './shared/ng-else.directive';
import { ServicoCursosComponent } from './servico-cursos/servico-cursos.component';
import {CursosService} from './servico-cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBidingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivasComponent,
    DiretivaNgIfComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ServicoCursosComponent,
    CriarCursoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CursosModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

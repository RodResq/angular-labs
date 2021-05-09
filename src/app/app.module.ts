import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import {CommonModule, registerLocaleData} from '@angular/common';
import {DiretivaNgclassComponent} from './diretiva-ngclass/diretiva-ngclass.component';
import {DiretivaNgstyleComponent} from './diretiva-ngstyle/diretiva-ngstyle.component';
import {OperadorElvisComponent} from './operador-elvis/operador-elvis.component';
import {ExemploNgContentComponent} from './exemplo-ng-content/exemplo-ng-content.component';
import {FundoAmareloDirective} from './shared/fundo-amarelo.directive';
import {DiretivasCustomizadasComponent} from './diretivas-customizadas/diretivas-customizadas.component';
import {HighlightMouseDirective} from './shared/highlight-mouse.directive';
import {HighlightDirective} from './shared/highlight.directive';
import {NgElseDirective} from './shared/ng-else.directive';
import {LogService} from './shared/log.service';
import {ExemplosPipesComponent} from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import localePt from '@angular/common/locales/pt'
import {SettingsService} from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import {routing} from './app.routing';
import {AppRoutingModule} from './app.routing.module';

registerLocaleData(localePt, 'pt-BR')

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
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MeuFormModule,
    CursosModule,
    AppRoutingModule
    // routing
  ],
  providers: [
    // provide: LOCALE_ID,
    // useValue: 'pt-BR'
    SettingsService, //usando um servico como um provider -> importantissimo para fazer alguma config. global para toda a aplicacao.
    {
        provide: LOCALE_ID,
        deps: [SettingsService],
        useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  // providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

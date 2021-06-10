import { Injectable } from '@angular/core';
import {CrudService} from '../../shared/crud-service';
import {Curso} from './cursos-lista/curso';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Curso2Service extends CrudService<Curso>{

  constructor(private http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }
}

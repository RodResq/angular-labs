import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from './curso';
import {environment} from '../../../../environments/environment';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly APi = `${environment.API}cursos`;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.APi)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }
 }

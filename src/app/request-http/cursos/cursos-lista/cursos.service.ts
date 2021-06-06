import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from './curso';
import {environment} from '../../../../environments/environment';
import {delay, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API = `${environment.API}cursos`;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  create(curso) {
    return this.httpClient.post(this.API, curso).pipe(take(1))
  }
 }

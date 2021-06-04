import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from './curso';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly APi = `${environment.API}cursos`;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.APi)
  }
 }

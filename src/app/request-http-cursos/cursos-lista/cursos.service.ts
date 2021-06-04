import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly APi: string = 'http://localhost:3000/cursos';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.APi)
  }
 }

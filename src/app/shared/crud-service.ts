import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Curso} from '../request-http/cursos/cursos-lista/curso';
import {delay, take, tap} from 'rxjs/operators';

export class CrudService<T> {

  constructor(private httpClient: HttpClient, private API_URL) {
  }

  listar(): Observable<Curso[]> {
    return this.httpClient.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  loadById(id) {
    return this.httpClient.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.httpClient.post(this.API_URL, record).pipe(take(1))
  }

  private update(record: T) {
    return this.httpClient.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    if(record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}

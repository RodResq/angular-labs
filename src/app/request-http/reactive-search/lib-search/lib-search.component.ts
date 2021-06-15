import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, pipe, Subscription} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl;
  readonly SEARCH_API = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.queryField.value);
    let value = this.queryField.value;

    const fields = 'name,description,version,homepage';

    // Passando query params para a requisicao
    const params_ = {
      fields: fields,
      search: value
    };

    // Maneira mais dinamica de passar query params
    let params = new HttpParams();
    params = params.set('search', value);
    params = params.append('fields', fields);

    if(value && (value = value.trim()) != '') {
      this.results$ = this.http.get(this.SEARCH_API, { params })
        .pipe(
            tap((res: { total: number, results: any }) => this.total = res.total),
            map((res: { total: number, results: any }) => res.results)
        )
    }
  }
}

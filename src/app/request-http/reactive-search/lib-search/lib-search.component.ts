import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';

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

  readonly FIELDS = 'name,description,version,homepage';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.results$ = this.queryField.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value)),
      switchMap(value => {
        return this.http.get(this.SEARCH_API, {
          params: {
            search: value,
            fields: this.FIELDS
          }
        });
      }),
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
    )
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

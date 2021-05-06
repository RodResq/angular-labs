import { Pipe, PipeTransform } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], args: string): unknown {
    if(value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();

    console.log(filter);

    return value.filter(
      v => {
        v.toLocaleLowerCase().indexOf(filter) != -1
        console.log(v);
      }
    );
  }

}

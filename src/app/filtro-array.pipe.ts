import { Pipe, PipeTransform } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any[], args: string): unknown {
    if(value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLowerCase();

    console.log(filter);

    return value.filter(
      v => {
        v.toLowerCase().indexOf(filter) != -1
        console.log(v);
      }
    );
  }

}

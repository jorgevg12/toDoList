import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return moment(value).calendar();
  }

}

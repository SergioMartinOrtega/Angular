import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroPipe'
})
export class EuroPipePipe implements PipeTransform {

  transform(value: number): string {
    return value + '€';
  }

}

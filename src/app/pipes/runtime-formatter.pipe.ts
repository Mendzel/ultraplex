import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtimeFormatter',
})
export class RuntimeFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 60) {
      let number = (value / 60).toString();
      number = number.slice(0, number.indexOf('.')); // Got to remove any decimal digits as .toFixed rounded the number. For example for 90 minutes it displayed 2 because of 1.5

      return `${number}h ${value % 60}min`;
    } else {
      return `${value || 0}min`;
    }
  }
}

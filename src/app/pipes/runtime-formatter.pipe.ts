import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtimeFormatter',
})
export class RuntimeFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 60) {
      return `${(value / 60).toFixed()}h ${value % 60}min`;
    } else {
      return `${value || 0}min`;
    }
  }
}

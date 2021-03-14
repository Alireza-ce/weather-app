import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemperature',
})
export class ConvertTemp implements PipeTransform {
  transform(value: any, args?: any) {
    if (!value) return null;

    return value - 273.15;
  }
}

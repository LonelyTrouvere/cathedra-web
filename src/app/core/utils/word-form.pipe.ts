import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordForm',
  standalone: true,
})
export class WordFormPipe implements PipeTransform {
  transform(count: number, one: string, few: string, many: string): string {
    const value = Math.abs(count) % 100;
    const lastDigit = value % 10;

    if (value >= 11 && value <= 14) {
      return many;
    }

    if (lastDigit === 1) {
      return one;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return few;
    }

    return many;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {
  convertTemp(value: number, type: string, useSymbol: boolean): string {
    let temp = 0;
    let symbol = 'C';
    if (type === 'C') {
      temp = (value - 32) * 5 / 9;
    } else {
      temp = value * 9 / 5 + 32;
      symbol = 'F';
    }

    if (useSymbol) {
      return temp.toFixed(1) + symbol;
    }

    return temp.toFixed(1);
  }

  transform(value: number, ...args: any[]): any {
    let type = 'C';
    let useSymbol = false;
    if (args && args.length > 0) {
      useSymbol = !!args[0];
    }
    if (args && args.length > 1) {
      type = args[1].toUpperCase();
    }
    if (value !== undefined && value !== null && !isNaN(value)) {
      return this.convertTemp(value, type, useSymbol);
    }
    return null;
  }

}

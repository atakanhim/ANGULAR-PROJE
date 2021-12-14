import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUpdateFilter'
})
export class ProductUpdateFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

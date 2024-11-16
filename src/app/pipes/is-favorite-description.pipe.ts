import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavoriteDescription'
})
export class IsFavoriteDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

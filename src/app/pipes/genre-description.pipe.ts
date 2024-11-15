import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreDescription'
})
export class GenreDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

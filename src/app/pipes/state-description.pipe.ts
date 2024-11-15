import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

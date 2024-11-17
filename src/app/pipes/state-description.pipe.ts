import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription'
})
/**
 *  @description Pipe to get the state description by state id
 * 
 *  @param stateId - The state id - number
 *
 *  @returns The state description - string
 */
export class StateDescriptionPipe implements PipeTransform {
  constructor(
    private readonly _brazilianStateService: BrazilianStatesService
  ) { }

  transform(stateId: number): string {
    return this._brazilianStateService.getStateDescription(stateId);
  }
}

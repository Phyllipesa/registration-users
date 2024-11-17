import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavoriteDescription'
})
/**
 *  @description Pipe to get the isFavorite description by isFavorite boolean
 * 
 *  @param isFavorite - The isFavorite - boolean
 *
 *  @returns The isFavorite description - string
 */
export class IsFavoriteDescriptionPipe implements PipeTransform {
  transform(isFavorite: boolean): string {
    return isFavorite ? 'Sim' : 'Não';
  }
}

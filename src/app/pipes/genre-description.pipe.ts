import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genreDescription'
})
/**
 *  @description Pipe to get the genre description by genre id
 * 
 *  @param genreId - The genre id - number
 *
 *  @returns The genre description - string
 */
export class GenreDescriptionPipe implements PipeTransform {
  constructor(
    private readonly _genresService: GenresService
  ) {}
  
  transform(genreId: number): string {
    return this._genresService.getGenreDescription(genreId);
  }
}

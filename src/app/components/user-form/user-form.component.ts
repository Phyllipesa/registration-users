import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-date-to-date-obj';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-pt-br-date';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
/**
 *  UserFormComponent
 *
 *  This component is responsible for displaying the user form
 *  and handling the user form events
 *
 *  @param genresList - The list of genres
 *  @param statesList - The list of states
 *  @param userSelected - The user selected
 *
 *  @method ngOnInit - This method is called when the component is initialized
 *  @method ngOnChanges - This method is called when the component input changes
 *  @method onPasswordChange - This method is called when the password changes
 *  @method onDateChange - This method is called when the date changes
 *  @method displayFn - This method is called when the genre is displayed
 *  @method filterGenres - This method is called when the genre is filtered
 *  @method onFormSubmit - This method is called when the form is submitted
 *  @method setMindAndMaxDate - This method is called when the component is initialized
 *  @method setBirthDateToDatepicker - This method is called when the component is initialized
 */
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrenghtValue = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenreList: GenresListResponse = [];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(
    private readonly _el: ElementRef
  ) { }

  ngOnInit() {
    this.setMindAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.onPasswordChange(this.userSelected.password);
      this.filteredGenreList = this.genresList
    }
  }
  
/**
 *  onPasswordChange
 * 
 *  Set the passwordStrenghtValue property based on the password strength
 *  and emit the password change event
 * @param password 
 */
  onPasswordChange(password: string) {
    this.passwordStrenghtValue = getPasswordStrengthValue(password);
  }

  /**
   *  onDateChange
   *
   *  Set the dateValue property based on the date change event
   *  and emit the date change event
   * @param event 
   */
  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return;
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  /**
   *  displayFn
   *
   *  Display the genre description in the autocomplete
   * @param genreId 
   * 
   */
  displayFn(genreId: number): string {
    const genreFound = this.genresList.find(genre => genre.id === genreId);
    return genreFound ? genreFound.description : '';
  }

  /**
   *  filterGenres
   *
   *  Filter the genres list based on the search term
   * @param text 
   * 
   *  If the text is a number, return
   *  If the text is not a number, filter the genres list based on the search term
   */
  filterGenres(text: string) {
    if (typeof text === 'number') return;

    const searchTerm = text.toLowerCase();

    this.filteredGenreList = this.genresList.filter(genre =>
      genre.description.toLowerCase().includes(searchTerm)
    );
  }

  /**
   *  isAnyCheckboxChecked
   *
   *  Check if any checkbox is checked
   *  If any checkbox is checked, the user has at least one favorite music
   *  If no checkbox is checked, the user has no favorite music
   * @returns boolean
   */
  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite);
  }

  /**
   * onFormSubmit
   * 
   * Emit the form submit event
   * @param form 
   * @returns 
   */
  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.focusOnInvalidControl(form);
      return;
    }

    this.onFormSubmitEmitt.emit();

  }

  /**
   * focusOnInvalidControl
   * 
   * Focus on the first invalid control
   * @param form 
   */
  private focusOnInvalidControl(form: NgForm) {
    for (const control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`);

        invalidControl.focus();

        break;
      }
    }
  }

  /**
   *  setMindAndMaxDate
   * 
   *  Set the min and max date for the datepicker
   *  Min date is 100 years ago
   *  Max date is today
   */
  private setMindAndMaxDate() {
    this.maxDate = new Date();
    this.minDate = new Date(
      new Date().getFullYear() - 100, 0, 1
    );
  }

  /**
   * setBirthDateToDatepicker 
   * 
   * Convert a date string to a date object and set it to the datepicker
   * @param birthDate
   */
  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate)
  }
}

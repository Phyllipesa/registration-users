import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../directives/directives.module';
import { UserFormComponent } from './user-form/user-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';

@NgModule({
  declarations: [
    UserFormComponent,
    UsersCardListComponent,
    UserBeforeAndAfterDialogComponent
  ],
  imports: [
    PipesModule,
    FormsModule,
    BrowserModule,
    DirectivesModule,
    AngularMaterialModule,
  ],
  exports: [
    UserFormComponent,
    UsersCardListComponent,
  ]
})
export class ComponentsModule { }

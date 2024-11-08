import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../directives/directives.module';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule
  ],
  exports: [
    
  ]
})
export class ComponentsModule { }

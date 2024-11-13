import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatProgressBarModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatProgressBarModule,
    ],
    declarations: [

    ],
    providers: [

    ],
})
export class AngularMaterialModule {
}
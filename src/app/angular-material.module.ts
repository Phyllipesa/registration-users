import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";



@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    declarations: [

    ],
    providers: [

    ],
})
export class AngularMaterialModule {
}
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class MaterialModule { }
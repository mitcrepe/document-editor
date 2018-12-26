import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorComponent } from './document-editor.component';
import { FieldTableRowComponent } from './field-table-row/field-table-row.component';
import { FieldsTableComponent } from './fields-table/fields-table.component';
import { MaterialModule } from '../material'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DocumentEditorComponent,
    FieldTableRowComponent,
    FieldsTableComponent
  ],
  exports: [
    DocumentEditorComponent
  ]
})
export class DocumentEditorModule { }

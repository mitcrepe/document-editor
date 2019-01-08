import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorComponent } from './document-editor.component';
import { FieldTableRowComponent } from './field-table-row/field-table-row.component';
import { FieldsTableComponent } from './fields-table/fields-table.component';
import { MaterialModule } from '../material';
import { ImageComponent } from './image/image.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DocumentEditorComponent,
    FieldTableRowComponent,
    FieldsTableComponent,
    ImageComponent
  ],
  exports: [
    DocumentEditorComponent
  ]
})
export class DocumentEditorModule { }

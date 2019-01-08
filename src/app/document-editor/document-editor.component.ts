import { Component, OnInit, getModuleFactory, ViewChild } from '@angular/core';
import { Field } from '../document-editor/field';
import { FieldType } from './fieldType';
import { FieldState } from './fieldState';
import { Rectangle } from './rectangle';
import { Point } from './point';
import { Size } from './size';
import { FieldsTableComponent } from './fields-table/fields-table.component';
import { DocumentEditorService } from '../document-editor.service';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent implements OnInit {
  @ViewChild(FieldsTableComponent)
  private tableComponent: FieldsTableComponent;
  
  imageView: boolean;
  fields: Field[];

  constructor(private documentEditorService: DocumentEditorService) { 
    this.imageView = false;
  }
  
  ngOnInit() {
    this.loadFields();
  }

  loadFields(): void {
    this.documentEditorService.getFields().subscribe(fields => this.fields = fields);
  }

  onVerifyClick(field: Field): void {
    this.tableComponent.verifySelectedField();
    this.tableComponent.selectNextField();
  }

  onPreviewClick(): void {
    this.imageView = !this.imageView;
  }

}

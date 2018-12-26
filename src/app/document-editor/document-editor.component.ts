import { Component, OnInit } from '@angular/core';
import { Field } from '../document-editor/field';
import { FieldType } from './fieldType';
import { FieldStatus } from './fieldStatus';
import { Rectangle } from './rectangle';
import { Point } from './point';
import { Size } from './size';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent implements OnInit {
  fields: Field[];

  constructor() { }
  
  ngOnInit() {
    this.fields = [];

    let field1: Field = new Field();
    field1.id = "1";
    field1.name = "Total amount";
    field1.value = "50.00";
    field1.type = FieldType.Amount;
    field1.status = FieldStatus.OK;
    field1.foundValues = ["50.00", "100.00", "250.00"];
    field1.rectangle = new Rectangle(new Point(50, 60), new Size(30,10));
    this.fields.push(field1);

    let field2: Field = new Field();
    field2.id = "2";
    field2.name = "Vat amount";
    field2.value = "10.00";
    field2.type = FieldType.Amount;
    field2.status = FieldStatus.Warning;
    this.fields.push(field2);

  }

}

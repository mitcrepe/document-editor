import { Component, OnInit } from '@angular/core';
import { Field } from '../document-editor/field';
import { FieldType } from './fieldType';
import { FieldState } from './fieldState';
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

    let invoiceNumber: Field = new Field();
    invoiceNumber.id = "1";
    invoiceNumber.name = "Invoice number";
    invoiceNumber.value = "12345";
    invoiceNumber.type = FieldType.Standard;
    invoiceNumber.state = FieldState.OK;
    invoiceNumber.foundValues = ["12345", "1234s", "i23s"];
    invoiceNumber.rectangle = new Rectangle(new Point(50, 60), new Size(30,10));
    this.fields.push(invoiceNumber);

    let invoiceDate: Field = new Field();
    invoiceDate.id = "2";
    invoiceDate.name = "Invoice date";
    invoiceDate.value = "2018-12-31";
    invoiceDate.foundValues = ["2018-12-31", "2018-12-30", "2018-12-29"];
    invoiceDate.type = FieldType.Date;
    invoiceDate.state = FieldState.NotRecognized;
    this.fields.push(invoiceDate);

    let totalAmount: Field = new Field();
    totalAmount.id = "3";
    totalAmount.name = "Total amount";
    totalAmount.value = "50.01";
    totalAmount.type = FieldType.Amount;
    totalAmount.foundValues = ["50.01", "100.5", "250"];
    totalAmount.state = FieldState.Warning;
    this.fields.push(totalAmount);
  }

}

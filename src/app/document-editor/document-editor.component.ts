import { Component, OnInit, getModuleFactory, ViewChild } from '@angular/core';
import { Field } from '../document-editor/field';
import { FieldType } from './fieldType';
import { FieldState } from './fieldState';
import { Rectangle } from './rectangle';
import { Point } from './point';
import { Size } from './size';
import { FieldsTableComponent } from './fields-table/fields-table.component';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent implements OnInit {
  @ViewChild(FieldsTableComponent)
  private tableComponent: FieldsTableComponent;
  
  fields: Field[];

  constructor() { }
  
  ngOnInit() {
    this.fields = this.getMockFields();    
    this.fields = this.fields.concat(this.getMockFields());
    // this.fields = this.fields.concat(this.getMockFields());
    // this.fields = this.fields.concat(this.getMockFields());
    // this.fields = this.fields.concat(this.getMockFields());
    // this.fields = this.fields.concat(this.getMockFields());
  }

  onVerifyClick(field: Field) {
    this.tableComponent.verifySelectedField();
    this.tableComponent.selectNextField();
  }


  getMockFields(): Field[] {
    let fields: Field[] = [];

    let invoiceNumber: Field = new Field();
    invoiceNumber.id = "1";
    invoiceNumber.name = "Invoice number";
    invoiceNumber.value = "12345";
    invoiceNumber.type = FieldType.Standard;
    invoiceNumber.state = FieldState.OK;
    invoiceNumber.foundValues = ["12345", "1234s", "i23s"];
    invoiceNumber.rectangle = new Rectangle(new Point(50, 60), new Size(30,10));
    fields.push(invoiceNumber);

    let invoiceDate: Field = new Field();
    invoiceDate.id = "2";
    invoiceDate.name = "Invoice date";
    invoiceDate.value = "2018-12-31";
    invoiceDate.foundValues = ["2018-12-31", "2018-12-30", "2018-12-29"];
    invoiceDate.type = FieldType.Date;
    invoiceDate.state = FieldState.NotRecognized;
    fields.push(invoiceDate);

    let totalAmount: Field = new Field();
    totalAmount.id = "3";
    totalAmount.name = "Total amount";
    totalAmount.value = "50.01";
    totalAmount.type = FieldType.Amount;
    totalAmount.foundValues = ["50.01", "100.5", "250"];
    totalAmount.state = FieldState.Warning;
    fields.push(totalAmount);

    let vatAmount: Field = new Field();
    vatAmount.id = "4";
    vatAmount.name = "VAT amount";
    vatAmount.type = FieldType.Amount;
    vatAmount.state = FieldState.Warning;
    fields.push(vatAmount);

    return fields;
  }

}

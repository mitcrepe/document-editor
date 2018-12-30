import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field';
import { FieldType } from '../fieldType';
import { FieldState } from '../fieldState';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-fields-table',
  templateUrl: './fields-table.component.html',
  styleUrls: ['./fields-table.component.scss']
})
export class FieldsTableComponent implements OnInit {
  @Input() fields: Field[];
  public selectedField: Field;

  constructor() { }

  ngOnInit() {

  }
  
  fieldHasRectangle(field: Field): boolean {
    return field.rectangle != null;
  }

  getValueInputType(field: Field): string {
    let fieldType: string;
    switch (field.type) {
      case FieldType.Amount:
        fieldType = "number";
        break;
      case FieldType.Date:
        // fieldType = "date";
        // break;
      case FieldType.Standard:
      default:
      fieldType = "text";
        break;
    }

    return fieldType;
  }

  setFieldValue(field: Field, value: string) {
    //validate
    field.value = value;
  }

  makeFieldValid(field: Field) {
    field.state = FieldState.OK;
  }

  onRowClicked(field: Field){
    this.selectedField = field;
  }

  onValueSubmit(value: string){
    this.setFieldValue(this.selectedField, value);
    this.selectedField = null;
  }

  onSelectionClosed(){
    
  }

  onStateClicked(field: Field){
    this.makeFieldValid(field);
  }
  
}

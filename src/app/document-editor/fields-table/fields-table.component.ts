import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field';
import { FieldType } from '../fieldType';
import { FieldStatus } from '../fieldStatus';
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

  onRowClicked(field: Field){
    this.selectedField = field;
  }

  onValueSubmit(value: string){
    //validate
    this.selectedField.value = value;

    this.selectedField = null;
  }

  onSelectionClosed(){
    
  }

  /////

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  /////
  
}

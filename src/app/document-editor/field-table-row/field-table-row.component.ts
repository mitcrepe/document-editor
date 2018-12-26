import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field';
import { FieldType } from '../fieldType';
import { FieldStatus } from '../fieldStatus';

@Component({
  selector: 'app-field-table-row',
  templateUrl: './field-table-row.component.html',
  styleUrls: ['./field-table-row.component.scss']
})
export class FieldTableRowComponent implements OnInit {
  @Input() field: Field;

  constructor() {

  }

  ngOnInit() {
    console.log("its row");
  }

}

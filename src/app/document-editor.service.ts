import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Field } from './document-editor/field';
import { FieldType } from './document-editor/fieldType';
import { Rectangle } from './document-editor/rectangle';
import { FieldState } from './document-editor/fieldState';
import { Point } from './document-editor/point';
import { Size } from './document-editor/size';
import { FIELDS } from './mock-fields';

@Injectable({
  providedIn: 'root'
})
export class DocumentEditorService {

  constructor() { }

  getFields(): Observable<Field[]> {
    return of(FIELDS);
  }

}

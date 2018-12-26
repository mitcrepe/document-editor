import { FieldType } from './fieldType';
import { FieldStatus } from './fieldStatus';
import { Rectangle } from './rectangle';

export class Field {
    public id: string;
    public name: string;
    public isKey: boolean;
    public type: FieldType;
    public foundValues: string[];
    public value: string;
    public rectangle: Rectangle;
    public status: FieldStatus;

    constructor() { }
}
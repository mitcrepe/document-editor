import { Field } from "./document-editor/field";
import { FieldType } from "./document-editor/fieldType";
import { FieldState } from "./document-editor/fieldState";
import { Rectangle } from "./document-editor/rectangle";
import { Point } from "./document-editor/point";
import { Size } from "./document-editor/size";

export const FIELDS: Field[] = [
    {
        id: "1",
        name: "Invoice number",
        isKey: false,
        value: "12345",
        type: FieldType.Standard,
        state: FieldState.OK,
        foundValues: ["12345", "1234s", "i23s"],
        rectangle: new Rectangle(new Point(50, 60), new Size(30,10))
    },
    {
        id: "2",
        name: "Invoice date",
        isKey: false,
        value: "2018-12-31",
        type: FieldType.Date,
        state: FieldState.Warning,
        foundValues: ["2018-12-31", "2018-12-30", "2018-12-29"],
        rectangle: null
    },
    {
        id: "3",
        name: "Total amount",
        isKey: false,
        value: "",
        type: FieldType.Amount,
        state: FieldState.NotRecognized,
        foundValues: null,
        rectangle: null
    }
];
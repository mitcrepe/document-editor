import { Point } from './point'
import { Size } from './size'

export class Rectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(topCorner: Point, size: Size) {
        this.x = topCorner.x;
        this.y = topCorner.y;
        this.width = size.width;
        this.height = size.height;
    }
}
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements AfterViewInit {
  @ViewChild("canvas")
  private canvasRef: ElementRef;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  

  constructor() { }

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.context = this.canvas.getContext('2d');

    let image = new Image(200,200);
    image.src = "assets/img/invoice.jpg"
    this.context.drawImage(image, 50, 50, 200,200);
  }

}

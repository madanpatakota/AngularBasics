import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective implements OnInit {
  constructor(private ElementRef: ElementRef, private render: Renderer2) {}

  @Input('myChoiceColor') _mychoiceColor:string;


  ngOnInit(): void {
    //console.log(this.ElementRef);
    //noting but my directive
    console.log('what is the elementref here ????',
     this.ElementRef);
    this.render.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      this._mychoiceColor
    );
  }
}

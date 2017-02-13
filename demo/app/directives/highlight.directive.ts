import { Directive,ElementRef,Renderer,HostListener } from "@angular/core";

@Directive({
  selector:'[myHighlight]'
})


export class HighlightDirective {
  private _domElem:ElementRef;
  private _renderer:Renderer;

  constructor(
    private elem:ElementRef,
    private render:Renderer
  ){
    // render.setElementStyle(elem.nativeElement,"backgroundColor","red");
    this._domElem = elem.nativeElement;
    this._render = render;
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this._render.setElementStyle(this._domElem,"backgroundColor","red");
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this._render.setElementStyle(this._domElem,"backgroundColor",null);
  }


}

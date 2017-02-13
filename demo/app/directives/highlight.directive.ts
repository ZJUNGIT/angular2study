import { Directive,ElementRef,Renderer,HostListener,Input } from "@angular/core";

@Directive({
  selector:'[myHighlight]'
})


export class HighlightDirective {
  private _domElem:ElementRef;
  private _renderer:Renderer;
   private _defaultColor = "red";

  constructor(
    private elem:ElementRef,
    private render:Renderer
  ){
    // render.setElementStyle(elem.nativeElement,"backgroundColor","red");
    this._domElem = elem.nativeElement;
    this._render = render;
  }

  @Input("myHighlight") highlightColor:string;

  @HostListener("mouseenter")
  onMouseEnter(){
    this._render.setElementStyle(this._domElem,"backgroundColor",this.highlightColor || this._defaultColor);
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this._render.setElementStyle(this._domElem,"backgroundColor",null);
  }


}

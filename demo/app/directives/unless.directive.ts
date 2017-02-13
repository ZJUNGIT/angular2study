import { Directive, Input,ViewContainerRef,TemplateRef } from "@angular/core";

@Directive({
  selector:'[myUnless]',
})

export class UnlessDirective {
  constructor(
    //我们需要访问模板，并且还需要一个渲染器来渲染它的内容。
    //我们通过TemplateRef来访问模板。渲染器是ViewContainerRef。
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  //先把myUnless属性定义成一个“只写”属性。
  @Input() set myUnless(condition:boolean){ //@Input()装饰器表明这个属性对于指令来说是个输入属性。
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear();
    }
  }

}

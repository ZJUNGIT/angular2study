# Angular2快速起步（一）

## 数据绑定

数据绑定是一种机制，用来协调用户所见和应用数据，即管理模型和视图组件之间的数据同步。

angular2中有四种数据绑定：**插入符(interpolation)、单向绑定（one-way binding）、事件绑定(event binding)和双向绑定(two-way binding)**

根据数据流的方向，可以把所有绑定归为三类。 每一类都有它独特的语法：

|     数据方向     |         语法         |         绑定类型      |
| --------------- | ------------------- | -------------------- |
| 单向：从数据源到视图目标  |{{expression}}<br />[target]=“expression”<br />bind-target=“expression”| 插值表达式<br/>Property<br />Attribute<br />类(class)<br />样式(style) |
|单向：从视图目标到数据源|(target) = "statement" <br/>on-target = "statement"|事件|
|双向|[(target)] = "expression"<br/>bindon-target = "expression"|双向|



先来看一个简单的数据绑定例子：(bind-data-demo1)
```
import {Component} from "@angular/core";

@Component({
    selector:"root-app",
    styles:[
        `
            .yellow{background:yellow;}
        `
    ],
    template:`
        <ul>
          <li
          *ngFor="let Item of Items"
          (click)="onItemClicked(Item)">
              {{ Item.name }}
          </li>
        </ul>
        <input type="text" [(ngModel)]="selectItem.name">
        <br/>
        <p class="{{className}}">selectItemName: {{selectItem.name}}</p>
    `
})

export class AppComponent{
  public className:string = 'yellow';

  public Items = [
    {name: "Butter"},
    {name: "Milk"},
    {name: "Yogurt"},
    {name: "Cheese"}
  ]

  public selectItem = { name:''};

  onItemClicked(item){
    this.selectItem = item;
  }
}

```
代码解读：

1.@Component是一个装饰器，它使用配置对象来创建组件及视图。

2.`*ngFor`指令循环创建我们在模板中绑定的视图导出。 *是使用Angular2模板语法与模板标记的缩写。这个在后面的指令章节会有具体的介绍。

3.{{ Item.name }}就是angular2模板的插入符语法。插入符语法不仅能用到html标签的内容上，也可以用到属性上。`class="{{className}}"`。

4.在进行属性绑定时，我们也可以使用单向绑定的语法：
```
 <p [class]="className">selectItemName: {{selectItem.name}}</p>
```
**注意**：

class两端的括号[]不能省略，否则只会在初始值时赋值，而不会对变化进行监听。Angular会把这个表达式当做字符串常量看待，并用该字符串来初始化目标属性。它不会计算这个字符串。<br/>
单向绑定语法还有一种较少使用的形式，把中括号换成bind-前缀。
```
<p bind-class="classNames">selectItemName: {{selectItem.name}}</p>
```

5.事件绑定：当你点击项目值时候，onItemClicked()事件将被激活。一般情况下，Angular2事件绑定形式形如：
```
(click)="onItemClicked(Item)
```

6.双向数据绑定：
```
<input type="text" [(ngModel)]="selectItem.name">
```
ngModel指令使我们能够将表单绑定到Model。<br/>
[()]表示：双向数据绑定；<br/>
[]表示：数据从Model流向View；<br/>
()表示：数据从View流向Model;<br/><br/>
既然我们已经知道可以使用[]和()来进行数据的单向绑定，我们为何不尝试把[(ngModel)]进行拆分呢？
```
<input #username type="text" [ngModel]='selectItem.name' (ngModel)='selectItem.name=username.value'>
```
然而事情并不像我们预期的那样，因为ng2中不是通过ngModel事件来触发表单中数据变化的操作，而是通过ngModelChange。
```
<input type="text" [ngModel]='selectItem.name' (ngModelChange)='selectItem.name=$event'>
```
ngModelChange不是input元素的事件，它是ngModel指令的一个event property（事件属性）。<br/>
当Angular看到一个绑定标记如[(x)]，它认为指令x有一个叫做x的输入指令和一个叫做xChange的输出指令。<br/>


对于`model.name = $event`。ngModelChange不会产生DOM事件，这是一个Angular EventEmitter属性，当它被fire（激活）时返回了输入值。<br/>
$event是ngModelChange属性返回的输入框的值，它是一个Angular EventEmitter类型的属性，这个值就是我们想要的输入框的值。

看完上面的例子，Angular2的数据绑定语法就有了大致了解，不过这里还要深入解释几个知识点。<br/>

**绑定目标**：数据绑定的目标是DOM中的某些东西。这个目标可能是（元素|组件|指令的）property、（元素|组件|指令的）事件，或（极少数情况下）attribute名。

|   绑定类型   |    目标    |    范例    |
| ----------  | --------  | --------- |
|Property     |元素的 property <br/> 组件的 property<br/> 指令的 property |`<img [src] = "heroImageUrl">` <br/>`<hero-detail [hero]="currentHero"></hero-detail>`<br/>`<div [ngClass] = "{selected: isSelected}"></div>`|
|事件|元素的事件<br/> 组件的事件<br/> 指令的事件<br/>|`<button (click) = "onSave()">Save</button>`<br/>`<hero-detail (deleteRequest)="deleteHero()"></hero-detail>`<br/>`<div (myClick)="clicked=$event">click me</div>`|
|双向|事件与 property|`<input [(ngModel)]="heroName">`|
|Attribute	|attribute（例外情况）|`<button [attr.aria-label]="help">help</button>`|
|CSS 类|class property|`<div [class.special]="isSpecial">Special</div>`|
|样式|style property|`<button [style.color] = "isSpecial ? 'red' : 'green'">`|

让我们从结构型云层走出来，看看每种绑定类型的具体情况。

**属性（property）绑定**

当要把视图元素的属性（property）设置为模板表达式时，就要写模板的属性绑定。最常用的属性绑定是把元素属性设置为组件属性的值。下面这个例子中，image元素的src属性会被绑定到组件的heroImageUrl属性上：
```
<img [src]="heroImageUrl"/>
```

**单向输入**

人们经常把属性绑定描述成单向数据绑定，因为值的流动是单向的，从组件的数据属性流动到目标元素的属性。

**CSS类绑定**

借助CSS类绑定，可以从元素的class attribute上添加和移除CSS类名。<br/>
CSS类绑定的语法与属性绑定类似。

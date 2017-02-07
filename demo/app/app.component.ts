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
        <br>
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions :Array <any>=[
    {title:"Home","route":"/home",icon:"house"},
    {title:"Product","route":"/products",icon:"house"},
    {title:"NewProduct","route":"/newproducts",icon:"house"}
  ];
  currentAction:any;

  setCurrentAction(action: any) {
    this.currentAction=action

  }
}
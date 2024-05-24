import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions :Array <any>=[
    {title:"Home","route":"/home",icon:"house"},
    {title:"Product","route":"/products",icon:"house"},
    {title:"NewProduct","route":"/newproducts",icon:"house"}
  ];
  currentAction:any;
  //public isLoading :boolean=false;
  constructor( public appState:AppStateService,public loadingservice :LoadingService ) {
    // this.loadingservice.isLoading$.subscribe(
    //   {
    //     next:(value)=>{
    //       this.isLoading=value;
    //     }
    //   }
    // )
  }

  setCurrentAction(action: any) {
    this.currentAction=action

  }
}

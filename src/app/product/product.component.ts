import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {subscribe} from "node:diagnostics_channel";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  //products! :Array<Product>;

  // products$! :Observable<Array<Product>>;

   public products :Array<Product>=[];
   public  keyword: string="";



  /*{id:1,name:'computer',price:4555455 ,checked:false},
  {id:2,name:'Printer',price:360256 ,checked:true},
  {id:3,name:'Phone',price:45660 ,checked:false}]*/


 // constructor(private http:HttpClient) {}

  constructor(private productservice:ProductService) {}
  ngOnInit() {
   /* this.http.get<any>("http://localhost:8086/products")
      .subscribe(
        {
          next:data=>{this.products=data}
        ,
        error:err =>
       {
         console.log(err);
       }
        }


      )*/
    this.getProducts();
  }
 getProducts(){
   //this.http.get<any>("http://localhost:8086/products")
   //solution 1
   this.productservice.getProducts(1,2)
     .subscribe(
       {
         next:data=>{this.products=data}
         ,
         error:err =>
         {
           console.log(err);
         }
       }


     )

   //solution2
   //this.products$=this.productservice.getProducts();
//we can generate errors with pip




 }





  handleCheckProduct(product: Product) {
    //put it allows you to change all attributes
    //It sends an object containing a checked property whose value is the inverse of the current value of product.checked
    //this.http.patch<any>(`http://localhost:8086/products/${product.id}`, {checked:!product.checked}).
    this.productservice.checkProduct(product)
      .subscribe(
        {
          next:updatedproduct=>{
            product.checked=!product.checked;
            //this.getProduction();

          }


        })

          }

  handleDeletProduct(product: Product) {
    if(confirm("Etes vous sure ?"))

    this.productservice.deleteProduct(product).subscribe(
      {
        next:value=>
        {
          //this.getProducts();
          //ignore it in front end
         this.products=this.products.filter(p=>p.id!=product.id)


        }
      }
    )
  }

  searchProduct() {
 this.productservice.searchProducts(this.keyword).subscribe(
   {next:data=>
     {this.products=data;}}
 )
  }
}

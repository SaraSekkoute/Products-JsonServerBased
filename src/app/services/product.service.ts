import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //we can declare data,method in the service
// inject object  http
  constructor(private http:HttpClient) { }

  public  getProducts(page:number=1,size:number=4):Observable<Array<Product>>
  {
   return  this.http.get<any>(`http://localhost:8086/products?_page=${page}&_limit=${size}`)

  }
  public  checkProduct(product:Product):Observable<Product>
  {
    return  this.http.patch<Product>(`http://localhost:8086/products/${product.id}`,
      {checked:!product.checked})
  }
  public deleteProduct(product:Product)
  {
    return this.http.delete<any>(`http://localhost:8086/products/${product.id}`)
  }

  saveProduct(product: Product):Observable<Product> {

    return this.http.post<any>(`http://localhost:8086/products`,product);

  }
  public searchProducts(keyword: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`http://localhost:8086/products?name_like=${keyword}`);
  }

}

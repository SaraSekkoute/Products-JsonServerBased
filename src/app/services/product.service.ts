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

  public  searchProducts(keyword: string="",page:number=1,size:number=4)
  {
  // return  this.http.get<any>(`http://localhost:8086/products?_page=${page}&_limit=${size}`)
   //Iwant return HTTP respons (headers and body)
    return  this.http.get(`http://localhost:8086/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'})
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
 /* public searchProducts(keyword: string,page:number,size:number): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`http://localhost:8086/products?name_like=${keyword}&_page=${page}&_limit=${size}`);
  }*/

  getProductId(productId: number):Observable<Product>  {
    return this.http.get<Product>(`http://localhost:8086/products/${productId}`)

  }

  updateProduct(product: Product):Observable<Product>   {
    return this.http.put<any>(`http://localhost:8086/products/${product.id}`,product);

  }
}

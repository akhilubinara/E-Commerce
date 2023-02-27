import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartarray:any=[];
  cartlist = new BehaviorSubject([])
  constructor() { }

  //to add cart
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray);
    console.log(this.cartlist);

    //calling gettotal function
    let total = this.gettotal();
    console.log(total);
    
    
  }
  
    gettotal(){
      var grandsum=0;
      this.cartarray.map((item:any)=>{
      grandsum+=item.price;
    })
    return grandsum;
  }


  removecart(product:any){
    this.cartarray.map((item:any, index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1);

      }
    })
  }
  //remove all from cart
  removeall(){
    this.cartarray=[];
    this.cartlist.next(this.cartarray);
  }
}

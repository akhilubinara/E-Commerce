import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cartservice/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartitems:any=[]
  grandtotal = this.cart.gettotal();
  constructor(private cart:CartService, private router:Router){}

  ngOnInit():void{
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems = data;
      }
    )
  }
  emptycart(){
    this.cart.removeall();
  }
  removeitem(product:any){
    this.cart.removecart(product)
    this.grandtotal= this.cart.gettotal();
  }
}

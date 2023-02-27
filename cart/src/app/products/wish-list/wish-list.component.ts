import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cartservice/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

wishlist:any;
emsg:any;
  constructor(private api:ApiService, private router:Router, private cart:CartService){

  }
  ngOnInit():void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist = data.products
        if(this.wishlist.length===0){
          this.emsg=true
        }
      },
      (data:any)=>{
        this.wishlist = data.error.message
      }
    )
  }
  deletewish(product:any){
    return this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('wish-list');
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  addcart(product:any){
    this.cart.addcart(product);
    this.deletewish(product);
  }
}

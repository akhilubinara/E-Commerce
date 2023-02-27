import { Component } from '@angular/core';
import { ApiService } from '../products/api.service';
import { CartService } from '../products/cartservice/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartcount:number=0;
  
  constructor(private api:ApiService, private cart:CartService){

  }
  ngOnInit():void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        if(data){
          this.cartcount=data.length;
        }
      }
    )
  }
  search(event:any){
    let searchkey=event.target.value;
    this.api.searchkey.next(searchkey);
  }
}

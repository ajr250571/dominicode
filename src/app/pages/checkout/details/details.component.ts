import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(private shoppingCartSvc: ShoppingCartService) { }

  quantity$=this.shoppingCartSvc.quantityAction$;
  total$=this.shoppingCartSvc.totalAction$;
  cart$=this.shoppingCartSvc.cartAction$;
  displayedColumns: string[] = ['name','qty','price','subtotal'];
}

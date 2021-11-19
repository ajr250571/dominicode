import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  template: `
  <ng-container *ngIf="{Total: total$|async, quantity: quantity$|async} as dataCart">
    <ng-container *ngIf="dataCart.Total">
      <mat-icon>add_shopping_cart</mat-icon>
      {{dataCart.Total|currency}}
      ({{dataCart.quantity}})
    </ng-container>
  </ng-container>
  `,
})

export class CartComponent {
  constructor(private shoppingCartSvc: ShoppingCartService) { }

  quantity$=this.shoppingCartSvc.quantityAction$;
  total$=this.shoppingCartSvc.totalAction$;
  cart$=this.shoppingCartSvc.cartAction$;

}

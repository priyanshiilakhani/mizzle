import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { orderData } from './data';

@Component({
  selector: 'app-order',
  imports: [RouterLink, LucideAngularModule, AccountSidebar],
  templateUrl: './order.html',
  styles: ``,
})
  
export class Order {
  orderData = orderData;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { LucideAngularModule } from "lucide-angular";
import { wishlistData } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, AccountSidebar, LucideAngularModule, CommonModule ],
  templateUrl: './wishlist.html',
  styles: ``,
})
  
export class Wishlist {
  wishlistData = wishlistData;
}

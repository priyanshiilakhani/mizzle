import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { Footer } from "@app/components/footer/footer";
import { generalData, notificationData } from './data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  imports: [LucideAngularModule, AccountSidebar, Footer, FormsModule],
  templateUrl: './notification.html',
  styles: ``,
})
  
export class Notification {
  notificationData = notificationData;
  generalData = generalData;
}

import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";

@Component({
  selector: 'app-detail',
  imports: [LucideAngularModule, AccountSidebar],
  templateUrl: './detail.html',
  styles: ``,
})
  
export class Detail {

}

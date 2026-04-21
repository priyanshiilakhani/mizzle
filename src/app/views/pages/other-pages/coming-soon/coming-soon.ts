import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Header } from "@/app/layout/components/header/header";

@Component({
  selector: 'app-coming-soon',
  imports: [LucideAngularModule, RouterLink, Header],
  templateUrl: './coming-soon.html',
  styles: ``,
})
  
export class ComingSoon {

}

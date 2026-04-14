import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'checkout-personal-info',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './personal-info.html',
  styles: ``,
})
export class PersonalInfo {

}

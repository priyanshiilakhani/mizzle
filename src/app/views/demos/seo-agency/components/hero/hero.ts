import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'seo-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}

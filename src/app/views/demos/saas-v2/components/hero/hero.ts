import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { ParallaxDirective } from "@core/directive/parallax.directive";

@Component({
  selector: 'saas-v2-hero',
  imports: [RouterLink, LucideAngularModule, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}

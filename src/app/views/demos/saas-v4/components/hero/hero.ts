import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@core/directive/glightbox.directive";
import { ParallaxDirective } from "@core/directive/parallax.directive";

@Component({
  selector: 'saas-v4-hero',
  imports: [RouterLink, LucideAngularModule, GlightboxDirective, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}

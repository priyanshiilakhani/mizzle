import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@core/directive/glightbox.directive";

@Component({
  selector: 'aboutV2-banner',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './banner.html',
  styles: ``,
})
  
export class Banner {}

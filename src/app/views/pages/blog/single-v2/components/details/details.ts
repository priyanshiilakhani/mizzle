import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Breadcrumb } from "@app/components/breadcrumb/breadcrumb";

@Component({
  selector: 'blog-single-v2-details',
  imports: [LucideAngularModule, RouterLink, Breadcrumb],
  templateUrl: './details.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Details {

}

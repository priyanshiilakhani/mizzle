import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { CountUpDirective } from "ngx-countup";

@Component({
  selector: 'saas-v2-steps',
  imports: [LucideAngularModule, RouterLink, CountUpDirective],
  templateUrl: './steps.html',
  styles: ``,
})
export class Steps {

}

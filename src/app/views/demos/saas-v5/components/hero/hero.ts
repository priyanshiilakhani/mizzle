import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'saas-v5-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}

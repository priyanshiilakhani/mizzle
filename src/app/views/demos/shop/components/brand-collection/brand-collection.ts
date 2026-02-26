import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brands } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'shop-brand-collection',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './brand-collection.html',
  styles: ``,
})
export class BrandCollection {
  brands = brands;  
}

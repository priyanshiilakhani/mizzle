import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { Breadcrumb } from "@app/components/breadcrumb/breadcrumb";
import { FilterSidebar } from "./components/filter-sidebar/filter-sidebar";
import { ProductCard } from "./components/product-card/product-card";

@Component({
  selector: 'app-grid',
  imports: [RouterLink, LucideAngularModule, Breadcrumb, FilterSidebar, ProductCard],
  templateUrl: './grid.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Grid {

}

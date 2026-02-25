import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Clients } from "./components/clients/clients";
import { Features1 } from "./components/features1/features1";
import { Features2 } from "./components/features2/features2";
import { Features3 } from "./components/features3/features3";
import { Integration } from "./components/integration/integration";
import { Pricing } from "./components/pricing/pricing";
import { Blogs } from "./components/blogs/blogs";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-saas-v5',
  imports: [Hero, Clients, Features1, Features2, Features3, Integration, Pricing, Blogs, Footer],
  templateUrl: './saas-v5.html',
  styles: ``,
})
  
export class SaasV5 {

}

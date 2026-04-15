import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Category } from "./components/category/category";
import { OurBlogs } from "./components/our-blogs/our-blogs";
import { Sidebar } from "./components/sidebar/sidebar";
import { LucideAngularModule } from "lucide-angular";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-list-sidebar',
  imports: [RouterLink, Category, OurBlogs, Sidebar, LucideAngularModule, Footer],
  templateUrl: './list-sidebar.html',
  styles: ``,
})
export class ListSidebar {

}

import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { projectData } from './data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, AccountSidebar, CommonModule, RouterLink],
  templateUrl: './projects.html',
  styles: ``,
})
  
export class Projects {
  projectData = projectData;
}

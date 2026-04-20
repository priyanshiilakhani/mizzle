import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-theme-toggler',
  imports: [LucideAngularModule],
  templateUrl: './theme-toggler.html',
  styles: ``,
})
export class ThemeToggler {
  theme: string = 'light';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}

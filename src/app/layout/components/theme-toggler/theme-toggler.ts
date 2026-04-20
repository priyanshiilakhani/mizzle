import { Theme, ThemeService } from '@/app/services/theme.service';
import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-theme-toggler',
  imports: [LucideAngularModule],
  templateUrl: './theme-toggler.html',
  styles: ``,
})
export class ThemeToggler {
  currentTheme: Theme = 'system';

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getTheme();
  }
}

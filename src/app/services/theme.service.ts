import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'theme';

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const savedTheme = localStorage.getItem(this.storageKey) as Theme;
    this.applyTheme(savedTheme || 'system');
  }

  toggleTheme() {
    const current = this.getTheme();

    let next: Theme;

    // cycle: system → light → dark → system
    if (current === 'system') {
      next = 'light';
    } else if (current === 'light') {
      next = 'dark';
    } else {
      next = 'system';
    }

    this.applyTheme(next);
  }

  getTheme(): Theme {
    return (localStorage.getItem(this.storageKey) as Theme) || 'system';
  }

  applyTheme(theme: Theme) {
    const html = document.documentElement;

    // remove old classes
    html.classList.remove('light', 'dark');

    if (theme === 'light') {
      html.classList.add('light');
    } else if (theme === 'dark') {
      html.classList.add('dark');
    } 

    localStorage.setItem(this.storageKey, theme);
  }
}

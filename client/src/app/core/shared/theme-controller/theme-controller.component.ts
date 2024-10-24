import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-theme-controller',
  standalone: true,
  imports: [],
  templateUrl: './theme-controller.component.html',
  styleUrl: './theme-controller.component.css'
})
export class ThemeControllerComponent implements OnInit{
  @Input() lightTheme: string = 'light';
  @Input() darkTheme: string = 'dark';
  initialTheme: string = '';
  selectedTheme = signal<string>('');
  private systemTheme: string = '';
  private mediaQueryList: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  ngOnInit(): void {
    this.systemTheme = this.getThemeString(this.mediaQueryList.matches);
    this.mediaQueryList.addEventListener('change', (e) => {this.onSystemThemeChange(e)});
    this.selectedTheme.set(this.getInitialTheme());
    this.applyTheme();
  }

  private getThemeString(isDark: Boolean): string {
    return isDark ? this.darkTheme : this.lightTheme;
  }

  private getInitialTheme(): string {
    this.initialTheme = localStorage.getItem('theme') || this.systemTheme;
    return this.initialTheme;
  }

  private onSystemThemeChange(event: MediaQueryListEvent): void {
    this.systemTheme = this.getThemeString(event.matches);
    this.selectedTheme.set(this.systemTheme);
    localStorage.setItem('theme', this.systemTheme);
    this.applyTheme();
  }

  toggleTheme(): void {
    const newTheme = this.selectedTheme() === this.darkTheme ? this.lightTheme : this.darkTheme;
    this.selectedTheme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.selectedTheme());
  }
}

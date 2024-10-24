import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ThemeControllerComponent } from "../shared/theme-controller/theme-controller.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, ThemeControllerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements AfterViewInit{

  @ViewChild('navMenu')
  private navMenu!: ElementRef<HTMLUListElement>;

  ngAfterViewInit(): void {
    this.navAnimation();
  }

  private navAnimation(): void {
    gsap.from(this.navMenu.nativeElement.childNodes, {
      y: -20,
      opacity: 0,
      stagger: 0.2,
    });
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as profileData from '../../../assets/profile.json';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
  data: any = profileData;

  @ViewChild('heroTitle')
  private heroTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('heroParagraph')
  private heroParagraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('heroButtons')
  private heroButtons!: ElementRef<HTMLDivElement>;
  @ViewChild('heroAvatar')
  private heroAvatar!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.heroAnimation();
  }

  private heroAnimation(): void {

    gsap.from(this.heroTitle.nativeElement, {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.25,
    });

    gsap.from(this.heroParagraph.nativeElement, {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5
    });

    gsap.from(this.heroButtons.nativeElement, {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.75
    });
    
    gsap.from(this.heroAvatar.nativeElement, {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.0
    });
  }
}

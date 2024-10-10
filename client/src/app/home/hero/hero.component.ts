import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as profileData from '../../../assets/profile.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
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
  private heroAvatar!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    this.heroAnimation();
  }

  private heroAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.heroTitle.nativeElement, {
      scrollTrigger: {
        trigger: '#hero',
      },
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.25,
    });

    gsap.from(this.heroParagraph.nativeElement, {
      scrollTrigger: {
        trigger: '#hero',
      },
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5
    });

    gsap.from(this.heroButtons.nativeElement, {
      scrollTrigger: {
        trigger: '#hero',
      },
      y: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.75
    });
    
    gsap.from(this.heroAvatar.nativeElement, {
      scrollTrigger: {
        trigger: '#hero',
      },
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 0.75
    });
  }
}

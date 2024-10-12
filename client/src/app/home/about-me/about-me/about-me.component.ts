import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as profileData from '../../../../assets/profile.json';
import { TimelineComponent } from "../timeline/timeline.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements AfterViewInit{
  data: any = profileData;

  @ViewChild('aboutTitle')
  private aboutTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('aboutSubtitle')
  private aboutSubtitle!: ElementRef<HTMLParagraphElement>;
  @ViewChild('aboutParagraph')
  private aboutParagraph!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit() {
    this.aboutMeAnimation()
  }

  private aboutMeAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.aboutTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutTitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(this.aboutSubtitle.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutSubtitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(this.aboutParagraph.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutParagraph.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import * as profileData from '../../../../assets/profile.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{
  data: any = profileData;

  @ViewChild('projectsTitle')
  private projectsTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('projectsSubtitle')
  private projectsSubtitle!: ElementRef<HTMLParagraphElement>;
  
  ngAfterViewInit() {
    this.projectsAnimation();
  }

  private projectsAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.projectsTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.projectsTitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 300,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.projectsSubtitle.nativeElement, {
      scrollTrigger: {
        trigger: this.projectsSubtitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 300,
      opacity: 0,
      ease: "power2.out",
    });
  }
}

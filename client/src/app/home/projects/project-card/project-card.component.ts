import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements AfterViewInit{
  @Input() project: any;

  @ViewChildren('projectCard')
  private projectCards!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit() {
    this.projectCardAnimation();
  }

  private projectCardAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    
    this.projectCards.forEach((projectCard: ElementRef) => {
      gsap.from(projectCard.nativeElement, {
        scrollTrigger: {
          trigger: projectCard.nativeElement,
          end: 'bottom center',
          scrub: true,
        },
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      });
    })
  }
}

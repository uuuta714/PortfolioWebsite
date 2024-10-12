import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements AfterViewInit{
  @Input() experiences: any[] = [];

  @ViewChildren('timelinePath')
  private timelinePaths!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('timelineCard')
  private timelineCards!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit(): void {
    this.timelineAnimation();
  }

  private timelineAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.timelinePaths.forEach((timelinePath: ElementRef) => {
      gsap.from(timelinePath.nativeElement, {
        scrollTrigger: {
          trigger: timelinePath.nativeElement,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: true,
        },
        y: -200,
        scaleY: 0,
        ease: "power2.out",
      });
    });

    this.timelineCards.forEach((timelineCard: ElementRef) => {
      gsap.from(timelineCard.nativeElement, {
        scrollTrigger: {
          trigger: timelineCard.nativeElement,
          end: 'bottom center',
          scrub: true,
        },
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      });
    });
    
  }
}

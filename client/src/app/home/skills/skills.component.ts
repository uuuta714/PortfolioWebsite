import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as profileData from '../../../assets/profile.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit{
  data: any = profileData;
  disabled: boolean = true;

  @ViewChild('skillsTitle')
  private skillsTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChildren('skillsSubtitle')
  private skillsSubtitles!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('skillsItem')
  private skillsItems!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit() {
    this.skillsAnimation();
  }

  private skillsAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.skillsTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.skillsTitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });

    this.skillsSubtitles.forEach((subtitle) => {
      gsap.from(subtitle.nativeElement, {
        scrollTrigger: {
          trigger: subtitle.nativeElement,
          end: 'bottom center',
          scrub: true,
        },
        x: 200,
        opacity: 0,
        ease: "power2.out",
      });
    });
    
    this.skillsItems.forEach((skillsItem) => {
      gsap.from(skillsItem.nativeElement, {
        scrollTrigger: {
          trigger: skillsItem.nativeElement,
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

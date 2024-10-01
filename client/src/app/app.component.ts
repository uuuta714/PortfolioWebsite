import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./core/nav/nav.component";
import { HeroComponent } from "./home/hero/hero.component";
import { AboutMeComponent } from "./home/about-me/about-me.component";
import { ProjectsComponent } from "./home/projects/projects/projects.component";
import { ContactComponent } from "./home/contact/contact.component";
import { FooterComponent } from "./core/footer/footer.component";
import { SkillsComponent } from "./home/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent, AboutMeComponent, ProjectsComponent, ContactComponent, FooterComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styles: [`:host { display: block; }`], // Check if this is needed
})
export class AppComponent {
  title = 'client';
}

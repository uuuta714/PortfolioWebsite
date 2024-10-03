import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import * as profileData from '../../../../assets/profile.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  data: any = profileData;
}

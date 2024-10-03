import { Component } from '@angular/core';
import * as profileData from '../../../assets/profile.json';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  data: any = profileData;
  disabled: boolean = true;
}

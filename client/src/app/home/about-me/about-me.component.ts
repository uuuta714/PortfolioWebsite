import { Component } from '@angular/core';
import * as profileData from '../../../assets/profile.json';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  data: any = profileData;
}

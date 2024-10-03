import { Component } from '@angular/core';
import * as profileData from '../../../assets/profile.json';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  data: any = profileData;
}

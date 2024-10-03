import { Component } from '@angular/core';
import * as profileData from '../../../assets/profile.json';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  data: any = profileData;
}

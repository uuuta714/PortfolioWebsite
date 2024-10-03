import { Component } from '@angular/core';
import { NavComponent } from "./core/nav/nav.component";
import { FooterComponent } from "./core/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [`:host { display: block; }`], // Check if this is needed
})
export class AppComponent {
  title = 'client';
}

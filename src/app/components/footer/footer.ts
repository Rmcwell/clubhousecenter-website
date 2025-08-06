import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  // Footer component doesn't need much logic, but you could add
  // methods for newsletter signup, social media links, etc.
  
  constructor() { }
}
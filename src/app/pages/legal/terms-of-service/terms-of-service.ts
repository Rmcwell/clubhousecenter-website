import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {contactInfo} from "../../../data/info";

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  templateUrl: './terms-of-service.html',
  imports: [
    RouterModule,
  ],
  styleUrls: ['./terms-of-service.css']
})
export class TermsOfServicePage {
  contactInfo = contactInfo;
  lastUpdatedDate = 'August 31, 2026';
}
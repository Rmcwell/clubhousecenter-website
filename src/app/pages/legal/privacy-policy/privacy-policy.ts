import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {contactInfo} from "../../../data/info";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  templateUrl: './privacy-policy.html',
  imports: [
    RouterModule,
  ],
  styleUrls: ['./privacy-policy.css']
})
export class PrivacyPolicyPage {
    contactInfo = contactInfo;

    lastUpdatedDate = 'August 31, 2026';

}
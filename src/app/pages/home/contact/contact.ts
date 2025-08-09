import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [
    ReactiveFormsModule,
    LucideIconsModule
  ]
})
export class ContactComponent {

}

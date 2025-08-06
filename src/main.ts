import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js'; // Required for Angular's change detection

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideAnimations()
  ]
}).catch(err => console.error(err));

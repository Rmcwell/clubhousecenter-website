import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module'; // Make sure this path is correct

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
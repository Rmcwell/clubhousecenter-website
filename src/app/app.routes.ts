import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ListingPage } from './pages/listing/listing';
import { LocationPage } from './pages/location/location';
import { ContactPage } from './pages/contact/contact';
import { PropertyOverviewPage } from './pages/propertyOverview/propertyOverview';
import { PrivacyPolicyPage } from './pages/legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from './pages/legal/terms-of-service/terms-of-service';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'listing', component: ListingPage },
    { path: 'contact', component: ContactPage },
    { path: 'propertyOverview', component: PropertyOverviewPage },
    { path: 'location', component: LocationPage },
    { path: 'legal/privacy-policy', component: PrivacyPolicyPage },
    { path: 'legal/terms-of-service', component: TermsOfServicePage },
    // Catch-all: redirect any unknown paths to home
    { path: '**', redirectTo: '' }
];

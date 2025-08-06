import { NgModule } from '@angular/core';
import { LucideAngularModule, Menu, X, Phone, Mail, MapPin, Square, Truck, Zap, Shield, Star, ArrowRight } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ Menu, X, Phone, Mail, MapPin, Square, Truck, Zap, Shield, Star, ArrowRight })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
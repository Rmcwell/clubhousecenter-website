import { NgModule } from '@angular/core';
import { LucideAngularModule, Lock, LayoutDashboard, CircleParking, Wifi, UserCheck, Fan } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ Lock, LayoutDashboard, CircleParking, Wifi, UserCheck, Fan })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
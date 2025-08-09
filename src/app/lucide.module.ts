import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Lock,
  LayoutDashboard,
  CircleParking,
  Wifi,
  UserCheck,
  Fan,
  Building,
  Mail,
  Phone,
  User,
  Warehouse,
  SendHorizontal
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Lock,
      LayoutDashboard,
      CircleParking,
      Wifi,
      UserCheck,
      Fan,
      Building,
      Mail,
      Phone,
      User,
      Warehouse,
      SendHorizontal
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }
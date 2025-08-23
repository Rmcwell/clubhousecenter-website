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
  SendHorizontal,
  ChevronDown
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
      SendHorizontal,
      ChevronDown
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }
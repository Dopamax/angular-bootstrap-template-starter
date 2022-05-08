import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github,File,Archive,AlertCircle,MessageCircle,
  Battery,Award,Bluetooth,BookOpen,Mail,Bell } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  File,
  Archive,
  Battery,
  Award,
  Bluetooth,
  BookOpen,
  MessageCircle,
  AlertCircle,
  Mail,
  Bell,

};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

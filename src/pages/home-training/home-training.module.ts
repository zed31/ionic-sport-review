import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTrainingPage } from './home-training';

@NgModule({
  declarations: [
    HomeTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTrainingPage),
  ],
})
export class HomeTrainingPageModule {}

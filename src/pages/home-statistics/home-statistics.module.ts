import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeStatisticsPage } from './home-statistics';

@NgModule({
  declarations: [
    HomeStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeStatisticsPage),
  ],
})
export class HomeStatisticsPageModule {}

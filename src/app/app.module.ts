import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { GameComponent } from './components/game/game.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { OptionsComponent } from './components/options/options.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AchievementsComponent,
    OptionsComponent,
    MainViewComponent,
    StatisticsComponent,
    UpgradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCommonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

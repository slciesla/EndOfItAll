import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AchievementsComponent } from './achievements/achievements.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { OptionsComponent } from './options/options.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UpgradesComponent } from './upgrades/upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AchievementsComponent,
    StatisticsComponent,
    OptionsComponent,
    UpgradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

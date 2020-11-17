import { Component, OnInit } from '@angular/core';
import Decimal from 'break_infinity.js';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  theNumber: Decimal;
  howBigger: Decimal;
  howBigger2: Decimal;

  constructor(private gameSvc: GameService) { }

  ngOnInit(): void {
    this.gameSvc.theNumber.subscribe(newNumber => {
      this.theNumber = newNumber;
    });

    this.gameSvc.howBigger.subscribe(newBigger => {
      this.howBigger = newBigger;
    });

    this.gameSvc.howBigger2.subscribe(newBigger2 => {
      this.howBigger2 = newBigger2;
    });
  }

}

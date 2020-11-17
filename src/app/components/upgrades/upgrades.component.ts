import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Decimal from 'break_infinity.js';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.scss']
})
export class UpgradesComponent implements OnInit {
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

  upgradeBigger(): void {
    if (this.howBigger.times(10).lte(this.theNumber)) {
      this.gameSvc.updateTheNumber(this.theNumber.sub(this.howBigger.times(10)));
      this.gameSvc.updateHowBigger(this.howBigger.add(this.howBigger2));
    }
  }

  upgradeBigger2(): void {
    if (this.howBigger2.times(100).lte(this.theNumber)) {
      this.gameSvc.updateTheNumber(this.theNumber.sub(this.howBigger2.times(100)));
      this.gameSvc.updateHowBigger2(this.howBigger2.add(this.howBigger2));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import Decimal from 'break_infinity.js';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  theNumber: Decimal;
  howBigger: Decimal;

  constructor(private gameSvc: GameService) { }

  ngOnInit(): void {
    this.gameSvc.theNumber.subscribe(newNumber => {
      this.theNumber = newNumber;
    });

    this.gameSvc.howBigger.subscribe(newBigger => {
      this.howBigger = newBigger;
    });
  }

  buttonClick(): void {
    this.gameSvc.updateTheNumber(this.theNumber.add(this.howBigger));
  }
}

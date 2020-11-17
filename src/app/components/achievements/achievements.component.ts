import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Decimal from 'break_infinity.js';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements: any[];

  constructor(
    private gameSvc: GameService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.achievements = [];
    for (let i = 1; i !== 11; i++) {
      this.achievements.push({
        achieved: false, text: new Decimal(10).pow(i).toFixed(0) + ' The Number', obj: 1, val: new Decimal(10).pow(i)
      });
    }
    for (let i = 1; i !== 11; i++) {
      this.achievements.push({
        achieved: false, text: new Decimal(10).pow(i).toFixed(0) + ' How Bigger', obj: 2, val: new Decimal(10).pow(i)
      });
    }
    for (let i = 1; i !== 11; i++) {
      this.achievements.push({
        achieved: false, text: new Decimal(10).pow(i).toFixed(0) + ' How Bigger Bigger', obj: 3, val: new Decimal(10).pow(i)
      });
    }

    this.gameSvc.theNumber.subscribe(newNumber => {
      this.achievements.filter(a => a.obj === 1 && !a.achieved && a.val.lte(newNumber)).forEach(a => {
        a.achieved = true;

        this.snackBar.open(a.text + ' Achieved', 'Dismiss', {
          duration: 2000,
        });
      });
    });

    this.gameSvc.howBigger.subscribe(newBigger => {
      this.achievements.filter(a => a.obj === 2 && !a.achieved && a.val.lte(newBigger)).forEach(a => {
        a.achieved = true;

        this.snackBar.open(a.text + ' Achieved', 'Dismiss', {
          duration: 2000,
        });
      });
    });

    this.gameSvc.howBigger2.subscribe(newBigger2 => {
      this.achievements.filter(a => a.obj === 3 && !a.achieved && a.val.lte(newBigger2)).forEach(a => {
        a.achieved = true;

        this.snackBar.open(a.text + ' Achieved', 'Dismiss', {
          duration: 2000,
        });
      });
    });
  }

}

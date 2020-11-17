import { Injectable } from '@angular/core';
import Decimal from 'break_infinity.js';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  theNumber: Observable<Decimal>;
  howBigger: Observable<Decimal>;
  howBigger2: Observable<Decimal>;
  private theNumberSource = new BehaviorSubject(new Decimal(0));
  private howBiggerSource = new BehaviorSubject(new Decimal(1));
  private howBigger2Source = new BehaviorSubject(new Decimal(1));

  constructor() {
    this.theNumber = this.theNumberSource.asObservable();
    this.howBigger = this.howBiggerSource.asObservable();
    this.howBigger2 = this.howBigger2Source.asObservable();
  }

  updateTheNumber(newNumber: Decimal): void {
    this.theNumberSource.next(newNumber);
  }

  updateHowBigger(newHowBigger: Decimal): void {
    this.howBiggerSource.next(newHowBigger);
  }

  updateHowBigger2(newHowBigger2: Decimal): void {
    this.howBigger2Source.next(newHowBigger2);
  }

}

import {Component, inject} from '@angular/core';
import {Lib2Service} from "./lib2.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'lib-lib2',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    <h1>Counter 1: {{ counter1$ | async }}</h1>
    <button (click)="increment()">Increment counter</button>
    <button (click)="decrement()">Decrement counter</button>
    <button (click)="reset()">Reset counter</button>
  `,
  styles: ``
})
export class Lib2Component {
  private readonly _lib2Service: Lib2Service = inject(Lib2Service)
  counter1$ = this._lib2Service.counter$;

  constructor() {
  }

  increment() {
    this._lib2Service.increment();
  }

  decrement() {
    this._lib2Service.decrement();
  }

  reset() {
    this._lib2Service.reset();
  }
}

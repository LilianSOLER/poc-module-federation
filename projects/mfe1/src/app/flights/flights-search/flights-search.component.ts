import { Component } from '@angular/core';
import {Lib1Component} from "lib1";
import {Lib2Component} from "lib2";

@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [
    Lib1Component,
    Lib2Component
  ],
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {

}

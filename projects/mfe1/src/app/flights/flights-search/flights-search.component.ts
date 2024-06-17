import { Component } from '@angular/core';
import {Lib1Component} from "lib1";

@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [
    Lib1Component
  ],
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {

}

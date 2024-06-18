import { Component } from '@angular/core';
import {Lib1Component} from "lib1";
import {Lib2Component} from "lib2";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    Lib1Component,
    Lib2Component
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {

}

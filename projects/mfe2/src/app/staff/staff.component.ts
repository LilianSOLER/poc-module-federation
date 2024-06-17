import { Component } from '@angular/core';
import {Lib1Component} from "lib1";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    Lib1Component
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {

}

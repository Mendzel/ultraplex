import { Component, Input } from '@angular/core';
import { Screening } from 'src/app/interfaces/screening';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
})
export class ScreeningComponent {
  @Input() screening?: Screening;
}

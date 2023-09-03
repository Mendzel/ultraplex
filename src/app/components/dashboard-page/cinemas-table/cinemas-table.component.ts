import { Component, Input } from '@angular/core';
import { Cinema } from 'src/app/interfaces/cinema';

@Component({
  selector: 'app-cinemas-table',
  templateUrl: './cinemas-table.component.html',
  styleUrls: ['./cinemas-table.component.scss'],
})
export class CinemasTableComponent {
  @Input() cinemas!: Cinema[];
}

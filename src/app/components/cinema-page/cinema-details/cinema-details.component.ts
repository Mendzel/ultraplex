import { Component, Input } from '@angular/core';
import { Cinema } from 'src/app/interfaces/cinema';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss'],
})
export class CinemaDetailsComponent {
  @Input() cinema?: Cinema;
}

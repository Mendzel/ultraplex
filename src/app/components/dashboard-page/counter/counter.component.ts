import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() iconPath?: string;
  @Input() name?: string;
  @Input() counter?: number | null | never[];
}

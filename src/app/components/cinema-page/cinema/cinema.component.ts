import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  constructor(private route: ActivatedRoute, public store: StoreService) {}

  ngOnInit(): void {
    this.store.selectedCinemaId.set(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }
}

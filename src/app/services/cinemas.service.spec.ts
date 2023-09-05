import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';

import { CinemasService } from './cinemas.service';
import { StoreService } from './store.service';
import { CinemaDTO, Cinema } from '../interfaces/cinema';
import { Screen } from '../interfaces/screen';

describe('CinemasService', () => {
  let service: CinemasService;
  let httpTestingController: HttpTestingController;
  let storeService: StoreService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CinemasService, StoreService, MessageService],
    });

    service = TestBed.inject(CinemasService);
    httpTestingController = TestBed.inject(HttpTestingController);
    storeService = TestBed.inject(StoreService);
    messageService = TestBed.inject(MessageService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve cinemas successfully', () => {
    const mockCinemasData = {
      content: [
        { id: 1, name: 'Cinema 1' },
        { id: 2, name: 'Cinema 2' },
      ],
    };

    service.getCinemas().subscribe((cinemas: Cinema[]) => {
      expect(cinemas.length).toBe(2);
      expect(storeService.cinemasCounter).toBe(2);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}?`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCinemasData);
  });

  it('should add a screen to a cinema successfully', () => {
    const cinemaId = 1;
    const mockScreen: Screen = { id: 1, name: 'Screen 1' };

    service
      .addScreenToCinema(cinemaId, mockScreen)
      .subscribe((screen: Screen) => {
        expect(screen).toEqual(mockScreen);
      });

    const req = httpTestingController.expectOne(
      `${service.baseUrl}/${cinemaId}/screens`
    );
    expect(req.request.method).toBe('PUT');
    req.flush(mockScreen);
  });

  it('should add a cinema successfully', () => {
    const mockCinemaDTO: CinemaDTO = { name: 'New Cinema' };

    service.addCinema(mockCinemaDTO).subscribe((cinema: CinemaDTO) => {
      expect(cinema).toEqual(mockCinemaDTO);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockCinemaDTO);
  });
});

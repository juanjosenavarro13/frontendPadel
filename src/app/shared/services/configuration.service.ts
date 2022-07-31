import { ConfigurationHttpService } from './configuration-http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { configModel } from '../models/configModel';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private config = new BehaviorSubject<configModel>({} as configModel);
  config$ = this.config.asObservable();
  constructor(private configService: ConfigurationHttpService) {
    this.getConfiguration().subscribe(config => {
      this.config.next(config);
    });
  }

  private getConfiguration(): Observable<configModel> {
    return this.configService.getConfiguration();
  }

  getConfig() {
    return this.config.getValue();
  }
}

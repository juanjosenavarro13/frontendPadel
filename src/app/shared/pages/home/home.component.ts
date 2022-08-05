import { ConfigurationService } from './../../services/configuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stats: any;
  constructor(private ConfigurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.getstats();
  }

  getstats() {
    this.ConfigurationService.getStats().subscribe(data => {
      this.stats = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  private subscriptions: Subscription[] = []

  loggedIn = false;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.api.github.isLoggedIn().subscribe(r => {
        this.loggedIn = r;
      })
    )
  }

  logout() {
    this.api.github.logout();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
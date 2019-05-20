import { Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  private subscriptions: Subscription[] = []

  loggedIn = false;

  loggedInMenuItems = [
    {
      icon: 'ballot',
      label: 'Manage Posts',
      onClick: () => {
        this.router.navigateByUrl('/manage-posts')
      }
    },
    {
      icon: 'power_settings_new',
      label: 'Logout',
      onClick: () => { 
        this.api.github.logout();
        this.router.navigateByUrl('/');
      }
    }
  ]

  notLoggedInMenuItems = [
    {
      icon: 'exit_to_app',
      label: 'Login',
      onClick: () => { 
        this.router.navigateByUrl('/login');
      }
    }
  ]

  menuItems = []

  constructor(
    private api: Api,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.api.github.isLoggedIn().subscribe(r => {
        this.loggedIn = r;
        this.menuItems = this.loggedIn ? this.loggedInMenuItems : this.notLoggedInMenuItems;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
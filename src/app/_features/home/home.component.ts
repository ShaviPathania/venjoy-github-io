import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  posts = [
    {fileName: 'bash-tips-and-tricks'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
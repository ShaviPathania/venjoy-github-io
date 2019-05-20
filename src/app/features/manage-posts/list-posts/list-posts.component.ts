import { Component, OnInit, ViewChild } from '@angular/core';
import { Api } from '../../../api';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.api.posts.list().subscribe(posts => {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(posts);
    });
  }

}
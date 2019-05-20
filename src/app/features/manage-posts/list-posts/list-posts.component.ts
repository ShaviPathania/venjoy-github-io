import { Component, OnInit, ViewChild } from '@angular/core';
import { Api } from '../../../api';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.api.posts.list().subscribe(posts => {
      posts.forEach((post, idx) => post.id = idx);
      this.dataSource = new MatTableDataSource(posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
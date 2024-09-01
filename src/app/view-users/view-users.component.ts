import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PaginatedUserRequest } from './PaginatedUserRequest.module'
import {PagedUsersReponse } from './PagedUsersReponse.module';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit {
  public gridData: any[] = [];
  public searchText: string = '';
  public pageSize: number = 10;
  public skip: number = 0;
  public totalItems: number = 0;

    request : PaginatedUserRequest = 
  {
    filters :  { searchText : ""},
    rows : 10,
    PageNumber : 1,
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadGridData();
  }

  onSearch(): void {
    this.skip = 0; // Reset to first page on search
    this.loadGridData();
  }

  pageChange(event: any): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.loadGridData();
  }


  loadGridData(): void {
    this.userService.getPagintedFilteredUsers(this.request).subscribe((response: PagedUsersReponse) => {
      this.gridData = response.items;
      this.totalItems = response.totalItems;
      this.pageSize = response.pageSize;
    });
  }
}

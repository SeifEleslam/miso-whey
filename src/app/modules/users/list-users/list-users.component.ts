import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../interfaces/models/user';
import { ParamsService } from '../../../services/params.service';
import { Params } from '../../../interfaces/models/params';
import { UsersApiService } from '../../../services/api/users.api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent implements OnInit, OnDestroy {
  openModal = false;
  deleteUserDialog = false;
  deleteUserData?: { id: number; name: string } | null;
  selectedUser?: Partial<User> | null;
  isLoading = false;
  UserDialog = false;
  users: User[] = [];
  records?: number;
  queryParams: Partial<Params> = {};
  destroyed = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paramsService: ParamsService,
    private userAPI: UsersApiService
  ) {}

  cols = [
    {
      field: 'url',
      header: 'Image',
      sortable: false,
    },
    {
      field: 'name',
      header: 'Full Name',
      sortable: false,
    },
    {
      field: 'userName',
      header: 'UserName',
      sortable: false,
    },

    {
      field: 'email',
      header: 'Email',
      sortable: false,
    },
  ];

  // Lifecycle hooks
  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.destroyed))
      .subscribe((params) => this.fetchData(params));
  }

  // Dialog functions
  openNew() {
    this.selectedUser = {
      name: '',
    };
    this.UserDialog = true;
  }

  hideDialog() {
    this.selectedUser = null;
    this.UserDialog = false;
  }

  editUser(id: number) {
    this.selectedUser = this.users.find((user) => user.id === id);
    this.UserDialog = true;
  }

  saveSucceeded() {
    this.getUsersTableData();
  }

  // Remove ensure dialog
  deleteUser(user: User) {
    this.deleteUserData = {
      id: user.id,
      name: user.name,
    };
    this.deleteUserDialog = true;
  }

  hideDeleteUser() {
    this.deleteUserData = null;
    this.deleteUserDialog = false;
  }

  // Http requests
  confirmDelete() {
    if (!this.deleteUserData) {
      return;
    }
    this.isLoading = true;
    // this.userAPI.deleteUser(this.deleteUserData.id)
    //   .subscribe((res) => {
    //     this.getUsersTableData();
    //     this.notifyService.success(res.message);
    //   })
    //   .add(() => {
    //     this.deleteUserDialog = false;
    //     this.deleteUserData = null;
    //   });
  }

  getUsersTableData() {
    this.isLoading = true;
    this.userAPI
      .listUsers(this.queryParams)
      .subscribe((res) => {
        this.users = res;
        console.log(this.users);
      })
      .add(() => (this.isLoading = false));
  }

  // Pagination functions
  fetchData(params: any) {
    let valid;
    [valid, this.queryParams] = this.paramsService.reviewParams(
      params,
      Object.keys(new Params())
    );
    if (!valid) {
      this.updateRouter(this.queryParams, true);
      return;
    }
    this.getUsersTableData();
  }

  updateRouter(newParams: Partial<Params> = {}, replace: boolean = false) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: replace ? newParams : { ...this.queryParams, ...newParams },
      replaceUrl: replace,
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

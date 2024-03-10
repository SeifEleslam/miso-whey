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
  deleteUserData?: { id: number; name: string };
  selectedUser?: Partial<User>;
  isLoading = false;
  UserDialog = false;
  users: User[] = [];
  records?: number;
  queryParams: Partial<Params> = {};
  destroyed = new Subject<void>();
  modalHeader = '';
  approach?: 'edit' | 'create' | 'show';

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
    this.modalHeader = 'Create User';
    this.approach = 'create';
    this.selectedUser = {
      name: '',
    };
    this.UserDialog = true;
  }

  hideDialog() {
    this.selectedUser = undefined;
    this.UserDialog = false;
    this.approach = undefined;
  }

  editUser(id: number) {
    this.modalHeader = 'Edit User';
    this.approach = 'edit';
    this.selectedUser = this.users.find((user) => user.id === id);
    this.UserDialog = true;
  }
  showUser(id: number) {
    this.modalHeader = 'User Details';
    this.approach = 'show';
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
    this.deleteUserData = undefined;
    this.deleteUserDialog = false;
  }

  // Http requests
  confirmDelete() {
    if (!this.deleteUserData) {
      return;
    }
    this.isLoading = true;
    this.userAPI
      .deleteUser(this.deleteUserData.id)
      .subscribe({
        next: (res) => {
          this.getUsersTableData();
        },
        error: () => (this.isLoading = false),
      })
      .add(() => {
        this.deleteUserDialog = false;
        this.deleteUserData = undefined;
      });
  }

  getUsersTableData() {
    this.isLoading = true;
    this.userAPI
      .listUsers(this.queryParams)
      .subscribe((res) => {
        this.users = res;
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

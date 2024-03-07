import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
})
export class CustomTableComponent {
  constructor() {}
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() show: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Input() cols: {
    header: string;
    field: string;
    sortable?: boolean;
    status?: boolean;
  }[] = [];
  @Input() items: any[] = [];
  @Input() isLoading: boolean = false;
  @Input() key: string = '';
  @Input() title: string = '';

  imgFields = ['image', 'photo', 'url'];

  selectedItems: any[] = [];
  statuses: any[] = [];

  editProduct(item: any) {
    this.edit.emit(item);
  }

  showProduct(item: any) {
    this.show.emit(item);
  }

  deleteTrigger(item: any) {
    this.delete.emit(item);
  }
}

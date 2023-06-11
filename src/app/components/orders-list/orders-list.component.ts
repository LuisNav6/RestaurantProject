import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { Order } from '../../shared/order';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  p: number = 1;
  order: Order[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    this.crudApi.GetOrdersList().subscribe((data: Order[]) => {
      this.order = data;
      console.log(data);
    });
  }

  dataState() {
    this.crudApi.GetOrdersList().subscribe((data: Order[]) => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    });
  }

  deleteUser(order: Order) {
    if (window.confirm('¿Estás seguro de que quieres eliminar este pedido?')) {
      this.crudApi.DeleteOrderByFirstName(order.firstName);
      this.toastr.success(order.firstName + ' eliminado correctamente!');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  public OrderForm: FormGroup;


  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.crudApi.GetUsersList();
    this.uForm();
  }

  uForm() {
    this.OrderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      order: [''],
      quantity: ['', Validators.required]

    });
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // January is 0
    const year = today.getFullYear();

    const dayString = day < 10 ? '0' + day : day.toString();
    const monthString = month < 10 ? '0' + month : month.toString();

    return `${year}-${monthString}-${dayString}`;
  }

  get firstName() {
    return this.OrderForm.get('firstName');
  }

  get lastName() {
    return this.OrderForm.get('lastName');
  }

  get email() {
    return this.OrderForm.get('email');
  }

  get mobileNumber() {
    return this.OrderForm.get('mobileNumber');
  }

  get order() {
    return this.OrderForm.get('order');
  }

  get quantity() {
    return this.OrderForm.get('quantity');
  }



  ResetForm() {
    this.OrderForm.reset();
  }

  submitUserData() {
    this.crudApi.AddOrder(this.OrderForm.value);
    this.toastr.success(
      this.OrderForm.controls['firstName'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}

import { Injectable } from '@angular/core';
import { User } from '../shared/student';
import { AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn } from '@angular/fire/compat/database';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  UsersRef: AngularFireList<any>;
  UserRef: AngularFireObject<any>;
  OrdersRef: AngularFireList<any>;
  OrderRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.db.object('/').valueChanges().subscribe((data) => {
      console.log(data);
    });
    this.OrdersRef = this.db.list('orders-list'); // Initialize OrdersRef
    this.UsersRef = this.db.list('users-list'); // Initialize UsersRef
  }

  // Create Order
  AddOrder(order: Order): any {
    return this.OrdersRef.push(order); // Return the push operation result
  }

  // Fetch Single Order Object
  GetOrder(id: string): AngularFireObject<any> {
    this.OrderRef = this.db.object('orders-list/' + id);
    return this.OrderRef;
  }

  // Fetch Orders List
  GetOrdersList(): Observable<any[]> {
    return this.OrdersRef.valueChanges(); // Return the valueChanges() directly
  }

  // Delete Order Object
  DeleteOrder(id: string) {
    this.OrderRef = this.db.object('orders-list/' + id);
    this.OrderRef.remove();
  }

  DeleteOrderByFirstName(firstName: string) {
    const queryFn: QueryFn = (ref) =>
      ref.orderByChild('firstName').equalTo(firstName);
  
    this.db.list('orders-list', queryFn)
      .snapshotChanges()
      .subscribe((snapshots) => {
        snapshots.forEach((snapshot) => {
          const orderId = snapshot.key;
          this.DeleteOrder(orderId);
        });
      });
  }
  

  // Create User
  AddUser(user: User): any {
    return this.UsersRef.push(user); // Return the push operation result
  }

  // Fetch Single User Object
  GetUser(id: string): AngularFireObject<any> {
    this.UserRef = this.db.object('users-list/' + id);
    return this.UserRef;
  }

  // Fetch Users List
  GetUsersList(): Observable<any[]> {
    return this.UsersRef.valueChanges(); // Return the valueChanges() directly
  }

  // Update User Object
  UpdateUser(user: User) {
    this.UserRef.update(user);
  }

  // Delete User Object
  DeleteUser(id: string) {
    this.UserRef = this.db.object('users-list/' + id);
    this.UserRef.remove();
  }

  // Consulta por nombre
  GetUsersByFullName(firstName: string) {
    const queryFn: QueryFn = (ref) =>
      ref.orderByChild('firstName').equalTo(firstName);
    this.UsersRef = this.db.list('users-list', queryFn);
    return this.UsersRef.valueChanges();
  }

  // Consulta por fecha de entrada
  GetUsersByCheckInDate(checkInDate: string) {
    // Crea una función de consulta para filtrar por fecha de entrada
    const queryFn: QueryFn = (ref) => ref.orderByChild('checkIn').equalTo(checkInDate);
    this.UsersRef = this.db.list('users-list', queryFn);
    return this.UsersRef.valueChanges();
  }

  // Consulta por número de personas
  GetUsersByPersonsCount(personsCount: number) {
    // Crea una función de consulta para filtrar por número de personas
    const queryFn: QueryFn = (ref) => ref.orderByChild('persons').equalTo(personsCount);
    this.UsersRef = this.db.list('users-list', queryFn);
    return this.UsersRef.valueChanges();
  }
}

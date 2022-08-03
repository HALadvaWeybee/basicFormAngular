import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicForm';
  users: any = {};
  display:boolean = true;
  data:number = 10;
  data2:number = 20;
  userDetails = [
    {name: 'Himanshu',email: 'HA@gmail.com'},     
    {name: 'Darshit',email: 'DK@gmail.com'},
    {name: 'Vishal',email: 'VR@gmail.com'}
  ]

  // get form value
  getData(data: NgForm) {
     console.log(data);
     this.users = data;  
  }
   
  toggle() {
    this.display= this.display? false: true;
  }
  
  updateData() {
    this.data = Math.trunc(Math.random() * 100 + 1);
  }

  data3 = 'x';
  receiveDataFromChild(item: string) {
    console.log(item);
    this.data3 = item;
  }
  // todo-list
  /* list:any [] = [];
  makeTodo(data: any) {
     this.list.push({id:this.list.length, data:data.value});
     console.log(this.list);
     data.value = '';
  }

  deleteTodo(index: number) {
     this.list = this.list.filter(item => item.id != index); 
  } */
}

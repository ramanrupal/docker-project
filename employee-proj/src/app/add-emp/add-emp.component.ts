import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import {DataService} from '../data.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  submitted:boolean= false
  add_emp= { name: '', email: '', phone: ''};
  addEmployee: any ;
  constructor(private ds1: DataService) { }

  ngOnInit(): void {
       this.addEmployee=new FormGroup({
         name: new FormControl(this.add_emp.name,[Validators.required,Validators.minLength(2)]),
         email: new FormControl(this.add_emp.email,[Validators.required,Validators.email]),
         phone: new FormControl(this.add_emp.phone,Validators.required)
       });
  }

  insertData(): void{
      //console.log(this.addEmployee.value)
      if(this.addEmployee.status!='INVALID'){
        this.ds1.postEmployee(this.addEmployee.value).subscribe((result)=>{
        console.log("data is submitted",result);
      })
      this.submitted=true;
      }
      else{
        alert("Please enter valid inputs first");
      }
  }

  closeAlert(){
    this.submitted=false;
    this.addEmployee.reset();

  }

    get name(){
      return this.addEmployee.get('name');
    }

    get email(){
      return this.addEmployee.get('email');
    }

    get phone(){
      return this.addEmployee.get('phone');
    }
}


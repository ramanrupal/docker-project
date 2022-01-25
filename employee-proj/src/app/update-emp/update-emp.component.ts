import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
    alert: boolean=false;
    editEmployee: any;
    // editEmployee = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl('')
  // });

  constructor(private router: ActivatedRoute, private ds3: DataService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.ds3.getEmployeeById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log("Result is",result);
       this.editEmployee=new FormGroup({
         name: new FormControl(result[0]['name'],[Validators.required,Validators.minLength(2)]),
         email: new FormControl(result[0]['email'],[Validators.required,Validators.email]),
         phone: new FormControl(result[0]['phone'],Validators.required)
       })
    });
  }

  submitEditedData(){
    //console.log("data afte edit");
    //console.log(this.dataToEditEmployee.value);
    if(this.editEmployee.status != 'INVALID')
    {
      this.ds3.updateEmployee(this.router.snapshot.params['id'],this.editEmployee.value).subscribe((result: any)=>{
      console.log(result);
    });
      this.alert=true;
    }
    else
    {
        alert("Please enter proper inputs");
    }


  }
  closeAlert(){
    this.alert=false;
  }

  get name(){
    return this.editEmployee.get('name');
  }

  get email(){
    return this.editEmployee.get('email');
  }

  get phone(){
    return this.editEmployee.get('phone');
  }
}


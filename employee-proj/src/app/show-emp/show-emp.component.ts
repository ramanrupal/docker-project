import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private ds: DataService) { }
  empData:any=[];
  ngOnInit(): void {
    this.ds.getEmployee().subscribe((data)=>{   //can use any variable in place of data
      console.log(data);
      this.empData=data;
    });
  }

  deleteData(id:any){
    this.empData.splice(this.empData.indexOf(id), 1);
    this.ds.deleteEmployee(id).subscribe((result)=>{
      console.log("Result is ",result);
    });

  }


}


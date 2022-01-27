import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   url="http://0.0.0.0/employee";
   httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) { }

  getEmployee(){
      console.log("hey there console data");
      return this.http.get(this.url);

    //console.log("hey there console");
  }

  postEmployee(data:any){
    //console.log(data);
    //console.log("Service called");
    return this.http.post(this.url,data);
  }

  deleteEmployee(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getEmployeeById(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateEmployee(id: any,data: any){
    return  this.http.put(`${this.url}/${id}`,data);
  }

}


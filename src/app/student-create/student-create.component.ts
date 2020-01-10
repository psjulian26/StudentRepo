import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
 
  data: Student
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Student();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    // if (this.data.name.length==0 || this.data.address.length==0 || this.data.year.length==0){
      if (this.data.name==null || this.data.address==null || this.data.year==null){
      alert('Empty fields found!');
     
    }else {
      // if(!isNumber(this.data.year)){
        // alert('Invalid data for year');
      // }else{
      this.apiService.createStuds(this.data).subscribe((response) => {
          this.router.navigate(['list']);
          alert('Record for ' + this.data.name + ' has been added.')       
        });
      // }
    }

   
  }
 
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
 
  id: number;
  data: Student;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Student();
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    
    //get item details using id
    this.apiService.getStuds(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  update() {
    //Update item by taking id and updated data object
    // var test:boolean=this.data.name.length==0 || this.data.address.length==0 || this.data.year.length==0; 
    // console.log(test);
    if(this.data.name.length==0 || this.data.address.length==0 || this.data.year.length==0){
      alert('Empty fields found!');     
    }else{
      if (confirm('Are you sure you want to update '+ this.data.name +'?')) {
          this.apiService.updateStuds(this.id, this.data).subscribe(response => {
            this.router.navigate(['list']);
            alert('Record for ' + this.data.name + ' has been updated.')        
          }) 
      }else{
        console.log('Update aborted.');
      }

               
    }
    
  }
 

}

import { Component, OnInit } from '@angular/core';
import {Subjects} from '../models/subjects';

import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {

  data: Subjects
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Subjects();
  }

  ngOnInit() {
  }
  submitForm() {
    // if (this.data.name.length==0 || this.data.address.length==0 || this.data.year.length==0){
      if (this.data.subname==null || this.data.description==null){
      alert('Empty fields found!');
     
    }else {
      this.apiService.createStuds(this.data).subscribe((response) => {
          // this.router.navigate(['subjects']);
          alert('Record for ' + this.data.subname + ' has been added.')
      });
    }
  }
}

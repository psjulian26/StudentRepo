import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subjects } from '../models/subjects';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  id: number;
  SubData: any;
  todo: string;
  // foundBooks:any=[];
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.SubData = [];
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    
    //get item details using id
    this.apiService.getStudSubs(this.id).subscribe(response => {
      console.log(response);
      this.SubData = response;       
      if(this.SubData.subjects==null){
        this.router.navigate(['list']);
        alert('No records found!');
      }
    })

  }
  getSubject(subs,isDelete:boolean=false){
    
    if(isDelete){
      this.todo="delete"
    }else{
      this.todo="edit"
    }
    alert('Cannot '+ this.todo + ' record for '+ subs.subname);
    
  }
}

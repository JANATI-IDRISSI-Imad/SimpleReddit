import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  searchText="";
  subjects : Subject[]=[];
  resultsubject : Subject[]=[];
  constructor(private subjectService : SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(){
    this.subjectService.findAll()
      .subscribe(subjects=> 
        this.subjects=this.resultsubject=subjects)
  }

}

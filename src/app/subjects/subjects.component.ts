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
  up:Number=1;
  constructor(private subjectService : SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(){
    this.subjectService.findAll()
      .subscribe(subjects=> 
        this.subjects=this.resultsubject=subjects)
  }

  voteUp(subject:Subject){
    subject.vote++;
    this.subjectService.vote(subject.id,subject.vote)
      .subscribe(()=>{
    })
  }
  voteDown(subject:Subject){
    this.subjectService.vote(subject.id,subject.vote-1)
      .subscribe(()=>{
        subject.vote--;
    })
  }

}

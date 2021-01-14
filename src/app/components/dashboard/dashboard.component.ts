import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private service:NoteserviceService ) { }
  public getNote:any;
  public gettitle:string;
  public getdsicription:string;
  public isLoggedIn =false;
  public istrash = false;
  public ids:any;
  public getNoteTotrash:any;
  
  ngOnInit(): void {
    this.getNotesList();
    this.getTotrash();
  }
  getNotesList(){
    this.service.getNote().subscribe(data=>{
      this.getNote=data;
      
    });
  }
 
  AddNotesList(){
    let item={
      title:this.gettitle,
      discription:this.getdsicription
    
    }
    this.service.addNote(item).subscribe(data=>{
      this.getNotesList();
     this.gettitle="",
     this.getdsicription=""
     
    })
  }
MovetrashNotesList(item:any){
  let item1={
    title:item.title,
    discription:item.discription
  
  }
  this.service.TrashAdd(item1).subscribe(data=>{
    this.getTotrash();
    this.getNotesList();
  })
  this.service.DeleteNote(item.id).subscribe(data=>{
    this.getNotesList();
   
  })
 
}
EditNotesListt(item:any){
  this.gettitle=item.title
  this.getdsicription=item.discription 
  this.ids=item.id
  item.Edit=true;
}
UpdateNotesList(item:any){
  item.title=this.gettitle
  item.discription=this.getdsicription
  item.Edit=false
  this.service.UpdateNote(item.id, item).subscribe(data => {
    this.gettitle="",
    this.getdsicription=""
   
    
  });
  
}
getTotrash(){
  this.service.getNoteTotrash().subscribe(data1=>{
    this.getNoteTotrash=data1;
    
  });
}
DeletetrashNotesList(item:any){
this.service.DeleteNotetrash(item.id).subscribe(data=>{
  this.getTotrash();
  
})
}
Restore(item:any){
  let item1={
    title:item.title,
    discription:item.discription
    
  }
  this.service.DeleteNotetrash(item.id).subscribe(data=>{
    this.getTotrash();
    
  })
  this.service.addNote(item1).subscribe(data=>{
    this.getTotrash();
    this.getNotesList();
  
  })
}
  trash(item:any){
  this.istrash = this.istrash?false:true;
  
  console.log(this.istrash)
 }
}


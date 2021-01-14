import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
 constructor(private http:HttpClient) { }
  getNote(){
    return this.http.get('http://localhost:3000/notes');
  }
addNote(notes){
  return this.http.post('http://localhost:3000/notes',notes); 
}
DeleteNote(id: number) {
  return this.http.delete(`http://localhost:3000/notes/${id}`);
}
UpdateNote(id: number ,item:any){
  return this.http.put(`http://localhost:3000/notes/${id}` ,item);
}
getNoteTotrash(){
  return this.http.get('http://localhost:3000/trash');
}
TrashAdd(trash){
  return this.http.post('http://localhost:3000/trash',trash); 
}
DeleteNotetrash(id: number) {
  return this.http.delete(`http://localhost:3000/trash/${id}`);
}
}


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes:Note[] = [];
  private notesSubject=new BehaviorSubject<Note[]>([]);

  private isEdit=new BehaviorSubject<boolean>(false);
  constructor() { }

  getEditable() {
    return this.isEdit.asObservable();
  }

  setEditable(value: boolean): void {
    this.isEdit.next(value);
  }


  getNotesObservable(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }


  createNote(note: Note): void {
    note.id=new Date().getTime();
    this.notes.push(note);
    this.notesSubject.next(this.notes);

  }

  updateNote(note: Note): void {
    const index=this.notes.findIndex(n=>n.id===note.id);
    if(index>-1){
      this.notes[index]=note;
      this.notesSubject.next(this.notes);
    }
  }
  

  deleteNote(id: number): void {
    this.notes=this.notes.filter(note=>note.id!==id);
    this.notesSubject.next(this.notes);
  }
  
}

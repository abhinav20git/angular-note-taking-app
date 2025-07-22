import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/interfaces/note';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  notes: Note[] = [];
  isEditMode:boolean = false;
  @Output() selectedNote=new EventEmitter<Note>();
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe((notes: Note[]) => {
      this.notes = notes;
      console.log('Created Notes:', notes);
    });
  }
  editNote(note: Note): void {
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
  }

  deleteNote(id:number): void {
    this.noteService.deleteNote(id);
  }
}
  
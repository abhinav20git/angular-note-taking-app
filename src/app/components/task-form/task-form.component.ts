import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from'src/app/services/note.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit,OnChanges {
  noteForm!: FormGroup;
  @Input() selectedNote!: Note;
  isEdit!:  boolean;

  constructor(private fb: FormBuilder, private noteService: NoteService) {
    this.noteService.getEditable().subscribe({
      next: (response) => {
        this.isEdit = response;
      }
      
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedNote']?.currentValue){
      const value=changes['selectedNote']?.currentValue;
      this.noteForm.patchValue({
        id: value.id,
        title: value.title,
        content: value.content,
      });
    }
  }
  ngOnInit() :void{
    this.noteForm=this.fb.group({
      id:new Date().getTime(),
      title:["",Validators.required],
      content:[""]
    })
  }

  onSubmit() : void  {
    if(this.noteForm.invalid){
      return;
    }
    const note:Note = this.noteForm.value;
    if(this.isEdit){
      this.noteService.updateNote(note);
      this.noteService.setEditable(true);
    }else{
    this.noteService.createNote(note);}
    // this.noteService.getNotesObservable(
    //   ).subscribe((notes:Note[]) => {
    //     console.log('Created Notes:', notes);
    //   }
    // )
    this.noteForm.reset();
  }
}

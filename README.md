# FirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



//Commands and steps

ng g c components/task-form
ng g c components/task-list
ng generate s services/note 
ng g i interfaces/note

import modules
 like
HttpClientModule
FormsModule
ReactiveFormsModule

import services
 like
NoteService 
from services

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from'src/app/services/note.service';

imported OnInit & ngOnInit() to immediately call the functions in it as soon as task-form component is called

used constructor to initialize the nnoteservice and formbuilder

Developerd the form using creating the constructor to instantiate the formbuilder and noteservice, ngoninit lifecycle hook, onsubmit function using ngSubmit on html

Create note service to create a new note and getting(observable) that note in other parts of application

Pass the value from child component emitted the note and revcieved in the parent component through a variable called selectedNote then from parent its passed to another child component in the noteform,the input decorator is used to get the value from parent and use it whereas Output decorattor is used to send the data again from child to parent component.

for updating the note crate a service and call it when isEdit is true
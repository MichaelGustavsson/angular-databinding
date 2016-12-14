import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 [innerText]="appTitle"></h1>
      <div class="well">
        <h4>Coursenumber: {{course.courseNumber}}</h4>
        <div class="form-group">
          <label>Title:</label>
          <input [(ngModel)]="course.title" type="text" class="form-control" >
        </div>
        <div class="form-group">
          <label>Duration (days):</label>
          <input [(ngModel)]="course.duration" type="text" class="form-control" >
        </div>
        <button class="btn btn-primary btn-sm" (click)="onSave()">Save</button>
        <button class="btn btn-warning btn-sm" (click)="onCancel()">Cancel</button>
      </div>
      <div [ngClass]="appState">{{appMessage}}</div>
    </div>
    `,
})
export class AppComponent  {
  appTitle: string = 'Course Track';
  appMessage: string = '';
  appState: string = '';
  course: any = {
    courseNumber: '2324',
    title: 'Web application Angular 2',
    duration: 4
  }

  onCancel() {
    this.appMessage = 'You cancelled the work!';
    this.appState = 'alert alert-warning';
  }

  onSave() {
    this.appMessage = 'You saved the work!';
    this.appState = 'alert alert-success';
  }
}

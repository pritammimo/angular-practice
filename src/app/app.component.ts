import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1>Hello world</h1> -->
    <!-- <app-abc></app-abc> -->
    <!-- edit video is output method -->
    <!-- desc,title is input method -->
    <!-- <app-video
      (editVideo)="onEdit()"
      title="video1"
      desc="video1 desc"
      url="#"
    ></app-video>
    <app-video title="video2" desc="video2 desc" url="#"></app-video> -->
    <!-- Material button -->
    <!-- <h1>Mat Button</h1>
    <button mat-button color="accent">Normal</button>
    <button mat-button color="primary">Primary</button>
    <button mat-raised-button color="primary">Raised</button> -->
    <h1>Material Toolbar</h1>
    <mat-toolbar style="background:#a7a7a7">
      <button mat-button color="secondary">Home</button>
      <button mat-button color="primary">Contact us</button>
      <button mat-button color="accent">Login</button>
    </mat-toolbar>
    <mat-card fxLayout="column">
      <div fxLayout="row" fxLayoutGap="20px">
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>First Name</mat-label>
          <input matInput placeholder="first Name" />
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Last Name</mat-label>
          <input matInput placeholder="Last Name" />
        </mat-form-field>
      </div>
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>Email</mat-label>
        <input matInput placeholder="Last Name" />
      </mat-form-field>
    </mat-card>
  `,

  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-course';
  // onEdit() {
  //   console.log('called edit');
  // }
}

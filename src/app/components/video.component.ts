import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-video',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h1>{{desc}}</h1>
      <a href="url">Click here to watch</a>
      <button (click)="onClick()">Edit video</button>
    </div>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class VideoComponent {
  @Input() title:any;
  @Input() desc:any;
  @Input() url:any;
  @Output() editVideo=new EventEmitter<any>();
  onClick(){
     this.editVideo.emit(this.title)
  }
}
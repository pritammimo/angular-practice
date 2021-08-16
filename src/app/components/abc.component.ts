import { Component}  from '@angular/core';
@Component({
  selector: 'app-abc',
  template: `
    <h2>
      <!-- String Binding -->
      <!-- Hello {{ userName }} load with function: {{ getUserName() }} -->
    </h2>
    <!--event binding-->
    <!-- Property binding -->
    <button (click)="toggleButton()" [disabled]="isButtonDisabled">
      {{ isButtonDisabled ? 'Enable me' : 'Disable Me' }}
    </button>
    <button (click)="enableButton()">Enable Button</button>
    <!-- input binding -->
    <div>
      <label>UserName</label>
      <input (input)="getUserName($event)" placeholder="Enter UserName" />
      <button (click)="saveUserName()">Save Name</button>
      <h1>Your UserName is:{{ displayName }}</h1>
    </div>
    <!-- Two way data binding -->
    <div>
      <label>UserName</label>
      <input [(ngModel)]="twowaybinding" placeholder="Enter UserName" />
      <button (click)="changeName()">Change Name</button>
      <h1>Your UserName is:{{ twowaybinding }}</h1>
    </div>
  `,
  styles: [``],
})
export class AbcComponent {
  userName = '';
  userId = 10;
  isButtonDisabled = false;
  displayName = '';
  twowaybinding = '';
  getUserName(data: any) {
    this.userName = data.target.value;
  }
  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
  enableButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
  saveUserName() {
    this.displayName = this.userName;
  }
  changeName() {
    this.twowaybinding = 'i am a new value';
  }
}
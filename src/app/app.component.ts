
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `
    <form
      class="overlay"
      fxLayoutAlign="center center"
      fxLayout="column"
      fxLayoutGap="30px"
      (ngSubmit)="this.loginForm.valid && login()"
      [formGroup]="this.loginForm"
    >  
    
        <img width="20%" src="../assets/digiresume-green.png" />
        <mat-card fxLayout="column">
          <mat-form-field>
            <input
              formControlName="email"
              type="Email"
              matInput
              placeholder="Email"
            />
            <mat-error>Email is Required</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input
              formControlName="password"
              type="password"
              matInput
              placeholder="Password"
            />
            <mat-error>6-10 digit Password is Required</mat-error>
          </mat-form-field>

          <a href="#">Forgot Password</a>
          <div
            style="margin-top:1rem"
            fxLayout="row"
            fxLayoutGap="20px"
            fxLayoutAlign="end"
          >
            <button
              type="submit"
              color="primary"
              mat-raised-button
            >
              Login
            </button>
            <button type="button" (click)="signup" color="accent" mat-raised-button>Signup</button>
          </div>
        </mat-card>
    
    </form>
  `,

  styles: [
    `
      .overlay {
        width: 100%;
        height: 100%;
      }
      button {
        color: white !important;
      }
      mat-card {
        height: 15rem;
        width: 20rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-course';
  loginForm: FormGroup;
  myObserver!: Observable<any>; 
  //untouched,dirty
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });
  }
  login() {
    //using map
    //observable is throwing->email && password
    //  const mapObserver= this.loginForm.valueChanges.pipe(map(data =>{
    //     return data.email;
    //   }))
    //   mapObserver.subscribe(data=>{
    //     console.log(data)
    //   })

    //basic example
    // this.myObserver=new Observable((emitter)=>{
    //   emitter.next(this.loginForm.value)
    // });
    // this.myObserver.subscribe((data)=>{
    //   console.log('called',data)
    // })
    
    //using filter
    // const filterObserver=this.loginForm.valueChanges.pipe(filter(data=>{
    //   if(data.email === 'pritam@gmail.com'){
    //     return true
    //   }else{
    //     return false
    //   }
    //     filterObserver.subscribe(data=>{
    //       console.log(data)
    //     });
    // }
     
    //   ))
  }
  signup(){
   this.myObserver.subscribe((data) => {
     console.log('called', data);
   });
  }
}

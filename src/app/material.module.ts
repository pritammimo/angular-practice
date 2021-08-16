import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
const data = [MatButtonModule, MatToolbarModule, MatInputModule,MatCardModule];
@NgModule({
 imports:data,
 exports:data
})
export class MaterialModule{

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QOneComponent } from './q-one/q-one.component';
import { QTwoComponent } from './q-two/q-two.component';
import { QThreeComponent } from './q-three/q-three.component';
import { QFourComponent } from './q-four/q-four.component';
import { YearlyyComponent } from './yearlyy/yearlyy.component';

const routes: Routes = [ 
{ path: 'q-one', component: QOneComponent },
{ path: 'q-two', component: QTwoComponent },
{ path: 'q-three', component: QThreeComponent },
{ path: 'q-four', component: QFourComponent },
{ path: 'yearlyy', component: YearlyyComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





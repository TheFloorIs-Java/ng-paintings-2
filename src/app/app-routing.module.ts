import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaintingComponent } from './pages/add-painting/add-painting.component';
import { AllPaintingsComponent } from './pages/all-paintings/all-paintings.component';

const routes: Routes = [
  {path:"", component:AllPaintingsComponent},
  {path:"add", component:AddPaintingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

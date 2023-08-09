import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component'; // Import the SamplePageComponent

const routes: Routes = [
  { path: '', component: SamplePageComponent }, // Set SamplePageComponent as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
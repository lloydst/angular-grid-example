import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutedComponent } from './routed/routed.component';
import { EmbeddedComponent } from './embedded/embedded.component';

const routes: Routes = [
  {
    path: '', component:EmbeddedComponent
  },
  {
    path:'test',component: RoutedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

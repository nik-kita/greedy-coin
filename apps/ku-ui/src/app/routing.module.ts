import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration.component';

export const appRoutes: Route[] = [
  {
    path: 'registration',
    component: RegistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule { }

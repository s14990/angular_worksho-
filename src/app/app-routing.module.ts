import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { ItemsComponent } from './containers/items/items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'workers', component: WorkersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

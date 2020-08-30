import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneCreateComponent } from './home/pages/phone-create/phone-create.component';
import { PhoneListComponent } from './home/pages/phone-list/phone-list.component';
import { PhoneEditComponent } from './home/pages/phone-edit/phone-edit.component';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'phone-list' },
  { path: 'create-phone', component: PhoneCreateComponent },
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'phone-edit/:id', component: PhoneEditComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

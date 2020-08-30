import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';
import { PhoneEditComponent } from './home/pages/phone-edit/phone-edit.component';
import { PhoneCreateComponent } from './home/pages/phone-create/phone-create.component';
import { PhoneListComponent } from './home/pages/phone-list/phone-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneCreateComponent,
    PhoneEditComponent,
    PhoneListComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HttpClientModule } from "@angular/common/http";
import { ItemComponent } from './containers/item/item.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    RegisterComponent,
    ProfileComponent,
    SearchComponent,
    DataGridComponent,
    ItemComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

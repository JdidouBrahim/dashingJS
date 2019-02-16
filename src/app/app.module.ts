import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashbordModule } from './dashbord/dashbord.module';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, DashbordModule, AppRoutesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

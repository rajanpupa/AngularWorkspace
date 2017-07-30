import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetModuleComponent } from './get-module/get-module.component';
import { PostModuleComponent } from './post-module/post-module.component';

@NgModule({
  declarations: [
    AppComponent,
    GetModuleComponent,
    PostModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,     
    WelcomeComponent
  ],
  imports: [ // External Modules include angular and third parties modules
    BrowserModule, // ngif and ngfor
    HttpClientModule,  // For HTTP request 

    // RouterModule: Order is matter. It will match the specific route first
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // Default route or Index page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}, // Error: 404: Not found page
    ]), // For route module 
    ProductModule // Feature Module 
  ],
  bootstrap: [AppComponent] // Starting point of the app, loaded when the app lunck
})
export class AppModule { }

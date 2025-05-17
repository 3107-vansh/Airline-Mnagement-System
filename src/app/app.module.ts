import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Import the root AppComponent
import { RouterModule } from '@angular/router';
// Import FlightFormComponent and FlightListComponent
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';

// Import FormsModule for ngModel usage
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  // Required for two-way data binding with ngModel

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgModule,
    BrowserModule,              // Import BrowserModule
    FormsModule,                 // Import FormsModule for ngModel
    //AppComponent,               // Declare AppComponent
    FlightFormComponent,        // Declare FlightFormComponent
    FlightListComponent, 
    AppRoutingModule ,  
    RouterModule.forRoot([  // ✅ Define routes here if not using app.routes.ts
      { path: 'add-flight', component: FlightFormComponent },
      { path: 'list-flights', component: FlightListComponent },
      { path: '', redirectTo: 'list-flights', pathMatch: 'full' }
    ])     // Declare FlightListComponent
  ],
  providers: [],
  bootstrap: [AppComponent
  ]      // Bootstrap the AppComponent
})
export class AppModule { }

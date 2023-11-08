import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CrudOperationComponent } from './indexDB/crud-operation/crud-operation/crud-operation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCrudComponent } from './firebase-crud/firebase-crud/firebase-crud.component';
import { firebaseConfig } from './helpers/constant';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './firebase-crud/add/add.component';
import { DisplayComponent } from './firebase-crud/display/display.component';
import { DashboardComponent } from './firebase-crud/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    // CrudOperationComponent,
    FirebaseCrudComponent,
    AddComponent,
    DisplayComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:1000'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

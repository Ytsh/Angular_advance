import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from "./components/header/header.module";
// import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user-preference/user.reducer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ];
  
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({userState:userReducer}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        HeaderModule,
        EffectsModule.forRoot([])
    ]
})
export class AppModule {}
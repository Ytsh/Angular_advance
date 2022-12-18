import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderModule } from "./components/header/header.module";
// import { HeaderComponent } from './components/header/header.component';
import { VoidComponent } from './void/void.component';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user-preference/user.reducer';

@NgModule({
    declarations: [
        AppComponent,
        VoidComponent,
    ],
    providers: [],
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { handlebarReducer } from './state/handlebar/handlebar.reducer';
import { UiState } from '@greedy-coin/types';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<UiState>({
      handlebar: handlebarReducer,
    }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

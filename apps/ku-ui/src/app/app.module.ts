import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiState } from '@greedy-coin/types';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { handlebarReducer } from './state/handlebar/handlebar.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    StoreModule.forRoot<UiState>({
      handlebar: handlebarReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

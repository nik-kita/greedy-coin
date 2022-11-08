import { Component, Input, OnInit } from '@angular/core';
import { HandlebarState, UiState } from '@greedy-coin/types';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'greedy-coin-root',
  template: `
    <hr [style]="envHrStyle"/>
    <router-outlet></router-outlet>
    <hr/>
    {{ title }}
    <hr/>
    <pre>{{ handlebarStr }}</pre>
  `,
})
export class AppComponent implements OnInit {
  title = 'ku-ui';
  @Input()
  envHrStyle = {
    border: '10px solid green',
    'border-radius': '5px'
  };

  handlebar$: Observable<HandlebarState>;
  handlebarStr = 'hi';

  constructor(store: Store<UiState>) {
    this.handlebar$ = store.select('handlebar');
  }

  ngOnInit(): void {
    this.handlebar$.pipe(
      tap((data) => {
        this.envHrStyle = {
          ...this.envHrStyle,
          border: `10px solid ${data.envColor}`
        };
        this.handlebarStr = JSON.stringify(data, null, 4);
      })).subscribe();
  }
}

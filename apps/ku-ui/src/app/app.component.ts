import { Component, OnInit } from '@angular/core';
import { HandlebarState, UiState } from '@greedy-coin/types';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'greedy-coin-root',
  template: `
    <router-outlet></router-outlet>
    <hr/>
    {{ title }}
    <hr/>
    {{ hello$ | async }}
  `,
})
export class AppComponent implements OnInit {
  title = 'ku-ui';
  handlebar$: Observable<HandlebarState>;

  hello$!: Observable<HandlebarState['hello']>;

  constructor(store: Store<UiState>) {
    this.handlebar$ = store.select('handlebar');
  }

  ngOnInit(): void {
    this.hello$ = this.handlebar$.pipe(map(({ hello }) => hello));
  }
}

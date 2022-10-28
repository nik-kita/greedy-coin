import { Component, OnInit } from '@angular/core';
import { HandleBar, UiState } from '@greedy-coin/types';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'greedy-coin-root',
  template: `
    {{ title }}
    <hr/>
    {{ hello$ | async }}
  `,
})
export class AppComponent implements OnInit {
  title = 'ku-ui';
  handlebar$: Observable<HandleBar>;

  hello$!: Observable<HandleBar['hello']>;

  constructor(store: Store<UiState>) {
    this.handlebar$ = store.select('handlebar');
  }

  ngOnInit(): void {
    this.hello$ = this.handlebar$.pipe(map(({ hello }) => hello));
  }
}

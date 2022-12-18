import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectUsers } from '../user-preference/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) { }

  isAuthenticated(): boolean
  {
    this.store.pipe(
      select(selectUsers),
      takeUntil(this.unsubscribe)
    ).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    });

    return this.isLoggedIn;
  }

  authenticate(): void {
    this.isLoggedIn = true;
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { loginAction } from 'src/app/user-preference/user.action';
import { selectUsers } from 'src/app/user-preference/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(selectUsers),
      takeUntil(this.unsubscribe)
    ).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout(isLoggedIn: boolean): void {
    this.store.dispatch(loginAction({isLoggedIn}));
  }

  login(isLoggedIn: boolean): void {
    this.store.dispatch(loginAction({isLoggedIn}));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  } 




}

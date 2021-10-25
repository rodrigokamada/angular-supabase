import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  loading: boolean;
  user: IUser;

  constructor(private router: Router,
              private supabaseService: SupabaseService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.loading = true;
    this.supabaseService.signIn(this.user.email)
    .then(() => {
    }).catch(() => {
      this.loading = false;
    });
  }

}

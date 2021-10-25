import { Component, OnInit } from '@angular/core';
import { IUser, SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;

  constructor(private supabaseService: SupabaseService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    const session = this.supabaseService.getSession();

    if (session && session.user && session.user.email) {
      this.user.email = session.user.email;
    }

    this.supabaseService.getProfile()
    .then((success: any) => {
      if (success && success.profile) {
        this.user.name = success.profile.username;
        this.user.website = success.profile.website;
        this.user.url = success.profile.avatar_url;
      }
    });
  }

  public update(): void {
    this.loading = true;

    this.supabaseService.updateProfile(this.user)
    .then(() => {
      this.loading = false;
    }).catch(() => {
      this.loading = false;
    });
  }

}

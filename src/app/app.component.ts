import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  session: any;

  constructor(private router: Router,
              private supabaseService: SupabaseService) {
    this.session = this.supabaseService.getSession();
  }

  public ngOnInit(): void {
    this.supabaseService.authChanges((_, session) => this.session = session);
  }

  public isAuthenticated(): boolean {
    if (this.session) {
      return true;
    }
    return false;
  }

  public signOut(): void {
    this.supabaseService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }

}

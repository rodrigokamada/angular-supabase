# Angular Supabase


Application example built with [Angular](https://angular.io/) 15 with authentication using the [Supabase](https://supabase.io/) service.

This tutorial was posted on my [blog](https://rodrigo.kamada.com.br/blog/autenticacao-usando-o-supabase-em-uma-aplicacao-angular) in portuguese and on the [DEV Community](https://dev.to/rodrigokamada/authentication-using-the-supabase-to-an-angular-application-2jek) in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)
[![Instagram](https://shields.braskam.com/v1/shields?name=instagram&format=rectangle&size=small&radius=5)](https://www.instagram.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))



## Getting started


### Create and configure the account on the Supabase

**1.** Let's create the account. Access the site [https://supabase.io/](https://supabase.io/) and click on the button *Start your project*.

![Supabase - Home page](https://res.cloudinary.com/rodrigokamada/image/upload/v1635016136/Blog/angular-supabase/supabase-step1.png)

**2.** Click on the button *Continue with GitHub*.

![Supabase - Sign in](https://res.cloudinary.com/rodrigokamada/image/upload/v1635016136/Blog/angular-supabase/supabase-step2.png)

**3.** Fill in the fields *Username or email address*, *Password* and click on the button *Sign in* to login with your GitHub account and if you don't have an account, click on the button *Create an account* to create a new account. [In this tutorial](https://github.com/rodrigokamada/angular-github-actions) there is a step-by-step guide to creating a GitHub account.

![Supabase - Sign in to GitHub](https://res.cloudinary.com/rodrigokamada/image/upload/v1635244871/Blog/angular-supabase/supabase-step3.png)

**4.** Click on the button *Authorize supabase*.

![Supabase - Authorize supabase](https://res.cloudinary.com/rodrigokamada/image/upload/v1635019829/Blog/angular-supabase/supabase-step4.png)

**5.** Click on the button *New project*.

![Supabase - New project](https://res.cloudinary.com/rodrigokamada/image/upload/v1635019925/Blog/angular-supabase/supabase-step5.png)

**6.** Click on the menu with the organization name created automatically.

![Supabase - Choose organization](https://res.cloudinary.com/rodrigokamada/image/upload/v1635081922/Blog/angular-supabase/supabase-step6.png)

**7.** Select an *Organization*, fill in the fields *Name* and *Database Password*, select a *Region* and click on the button *Create new project*.

![Supabase - Create a new project](https://res.cloudinary.com/rodrigokamada/image/upload/v1635081922/Blog/angular-supabase/supabase-step7.png)

**8.** Wait for the project creation.

![Supabase - Setting up the project](https://res.cloudinary.com/rodrigokamada/image/upload/v1635089223/Blog/angular-supabase/supabase-step8.png)

**9.** Click on the button *Copy* to copy the key that has been generated, in my case, the key `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTA4NjA1MCwiZXhwIjoxOTUwNjYyMDUwfQ.CzFuYS6XKvEwW5OsAAPAcHvuo-NVE4PUwDSKgqK9Yas` was copied and click on the button *Copy* to copy the URL that has been generated, in my case, the URL `https://wzlpmcsxrxogtctlznel.supabase.co` was copied becouse this key and URL will be configured in the Angular application.

![Supabase - New project created](https://res.cloudinary.com/rodrigokamada/image/upload/v1635104408/Blog/angular-supabase/supabase-step9.png)

**10.** Click on the menu *SQL* to setting up the database schema.

![Supabase - SQL](https://res.cloudinary.com/rodrigokamada/image/upload/v1635161259/Blog/angular-supabase/supabase-step10.png)

**11.** Click on the card *User Management Starter*.

![Supabase - Scripts](https://res.cloudinary.com/rodrigokamada/image/upload/v1635244744/Blog/angular-supabase/supabase-step11.png)

**12.** Click on the button *RUN*.

![Supabase - User Management Starter](https://res.cloudinary.com/rodrigokamada/image/upload/v1635170492/Blog/angular-supabase/supabase-step12.png)

**13.** Ready! Account created, key generated and database schema configured.



### Create the Angular application


**1.** Let's create the application with the Angular base structure using the `@angular/cli` with the route file and the SCSS style format.

```shell
ng new angular-supabase --routing true --style scss
CREATE angular-supabase/README.md (1062 bytes)
CREATE angular-supabase/.editorconfig (274 bytes)
CREATE angular-supabase/.gitignore (604 bytes)
CREATE angular-supabase/angular.json (3267 bytes)
CREATE angular-supabase/package.json (1080 bytes)
CREATE angular-supabase/tsconfig.json (783 bytes)
CREATE angular-supabase/.browserslistrc (703 bytes)
CREATE angular-supabase/karma.conf.js (1433 bytes)
CREATE angular-supabase/tsconfig.app.json (287 bytes)
CREATE angular-supabase/tsconfig.spec.json (333 bytes)
CREATE angular-supabase/src/favicon.ico (948 bytes)
CREATE angular-supabase/src/index.html (301 bytes)
CREATE angular-supabase/src/main.ts (372 bytes)
CREATE angular-supabase/src/polyfills.ts (2820 bytes)
CREATE angular-supabase/src/styles.scss (80 bytes)
CREATE angular-supabase/src/test.ts (788 bytes)
CREATE angular-supabase/src/assets/.gitkeep (0 bytes)
CREATE angular-supabase/src/environments/environment.prod.ts (51 bytes)
CREATE angular-supabase/src/environments/environment.ts (658 bytes)
CREATE angular-supabase/src/app/app-routing.module.ts (245 bytes)
CREATE angular-supabase/src/app/app.module.ts (393 bytes)
CREATE angular-supabase/src/app/app.component.scss (0 bytes)
CREATE angular-supabase/src/app/app.component.html (24617 bytes)
CREATE angular-supabase/src/app/app.component.spec.ts (1103 bytes)
CREATE angular-supabase/src/app/app.component.ts (221 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

**2.** Install and configure the Bootstrap CSS framework. Do steps 2 and 3 of the post *[Adding the Bootstrap CSS framework to an Angular application](https://github.com/rodrigokamada/angular-bootstrap)*.

**3.** Configure the variable `supabase.url` with the Supabase URL and the variable `supabase.key` with the Supabase key in the `src/environments/environment.ts` and `src/environments/environment.prod.ts` files as below.

```typescript
supabase: {
  url: 'https://wzlpmcsxrxogtctlznel.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTA4NjA1MCwiZXhwIjoxOTUwNjYyMDUwfQ.CzFuYS6XKvEwW5OsAAPAcHvuo-NVE4PUwDSKgqK9Yas',
},
```

**4.** Install the `@supabase/supabase-js` library.

```shell
npm install @supabase/supabase-js
```

**5.** Create the `SupabaseService` service.

```shell
ng generate service supabase --skip-tests=true
CREATE src/app/supabase.service.ts (137 bytes)
```

**6.** Change the `supabase.service.ts` file and add the lines as below.

```typescript
import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';

import { environment } from '../environments/environment';

export interface IUser {
  email: string;
  name: string;
  website: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(environment.supabase.url, environment.supabase.key);
  }

  public getUser(): User|null {
    return this.supabaseClient.auth.user();
  }

  public getSession(): Session|null {
    return this.supabaseClient.auth.session();
  }

  public getProfile(): PromiseLike<any> {
    const user = this.getUser();

    return this.supabaseClient.from('profiles')
    .select('username, website, avatar_url')
    .eq('id', user?.id)
    .single();
  }

  public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void): any {
    return this.supabaseClient.auth.onAuthStateChange(callback);
  }

  public signIn(email: string): Promise<any> {
    return this.supabaseClient.auth.signIn({
      email,
    });
  }

  public signOut(): Promise<any> {
    return this.supabaseClient.auth.signOut();
  }

  public updateProfile(userUpdate: IUser): any {
    const user = this.getUser();

    const update = {
      username: userUpdate.name,
      website: userUpdate.website,
      id: user?.id,
      updated_at: new Date(),
    };

    return this.supabaseClient.from('profiles').upsert(update, {
      returning: 'minimal', // Do not return the value after inserting
    });
  }

}
```

**7.** Create the `SignInComponent` component.

```shell
ng generate component sign-in --skip-tests=true
CREATE src/app/sign-in/sign-in.component.scss (0 bytes)
CREATE src/app/sign-in/sign-in.component.html (22 bytes)
CREATE src/app/sign-in/sign-in.component.ts (279 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

**8.** Change the `src/app/sign-in/sign-in.component.ts` file. Import the `Router` and `SupabaseService` services and create the `signIn` method as below.

```typescript
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
```

**9.** Change the `src/app/sign-in/sign-in.component.html` file. Add the lines as below.

```html
<div class="row justify-content-center my-5">
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col mb-2">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" name="email" #email="ngModel" [(ngModel)]="user.email" class="form-control form-control-sm">
          </div>
        </div>
        <div class="row">
          <div class="col d-grid">
            <button type="button" (click)="signIn()" class="btn btn-sm btn-success" [disabled]="loading">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" *ngIf="loading"></span>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**10.** Create the `ProfileComponent` component.

```shell
ng generate component profile --skip-tests=true
CREATE src/app/profile/profile.component.scss (0 bytes)
CREATE src/app/profile/profile.component.html (22 bytes)
CREATE src/app/profile/profile.component.ts (280 bytes)
UPDATE src/app/app.module.ts (642 bytes)
```

**11.** Change the `src/app/profile/profile.component.ts` file. Import the `SupabaseService` service and create the `update` method as below.

```typescript
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
```

**12.** Change the `src/app/profile/profile.component.html` file and add the lines as below.

```html
<div class="row justify-content-center my-5">
  <div class="col-4">
    <div class="row" *ngIf="user.url">
      <div class="col mb-2 text-center">
        <img [src]="user.url" class="rounded-circle">
      </div>
    </div>
    <div class="row">
      <div class="col mb-2">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" name="email" #email="ngModel" [(ngModel)]="user.email" disabled class="form-control form-control-sm">
      </div>
    </div>
    <div class="row">
      <div class="col mb-2">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" name="name" #name="ngModel" [(ngModel)]="user.name" class="form-control form-control-sm">
      </div>
    </div>
    <div class="row">
      <div class="col mb-2">
        <label for="website" class="form-label">Website:</label>
        <input type="text" id="website" name="website" #website="ngModel" [(ngModel)]="user.website" class="form-control form-control-sm">
      </div>
    </div>
    <div class="row">
      <div class="col d-grid">
        <button type="button" (click)="update()" class="btn btn-sm btn-dark" [disabled]="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" *ngIf="loading"></span>
          Save
        </button>
      </div>
    </div>
  </div>
</div>
```

**13.** Change the `src/app/app.component.ts` file. Import the `Router` and `SupabaseService` services and create the `isAuthenticated` and `signOut` methods as below.

```typescript
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
```

**14.** Change the `src/app/app.component.html` file and add the menu as below.

```html
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Angular Supabase</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarContent" class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" routerLink="/signIn" routerLinkActive="active" *ngIf="!isAuthenticated()">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/profile" routerLinkActive="active" *ngIf="isAuthenticated()">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="" (click)="signOut()" *ngIf="isAuthenticated()">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-outlet></router-outlet>
```

**15.** Change the `src/app/app-routing.module.ts` file and add the routes as below.

```typescript
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
];
```

**16.** Change the `src/app/app.module.ts` file. Import the `FormsModule` module and the `ProfileComponent` and `SignInComponent` components as below.

```typescript
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

declarations: [
  AppComponent,
  ProfileComponent,
  SignInComponent,
],
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
],
```

**17.** Run the application with the command below.

```shell
npm start

> angular-supabase@1.0.0 start
> ng serve

✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   2.90 MB
styles.css          | styles        | 268.30 kB
polyfills.js        | polyfills     | 128.51 kB
scripts.js          | scripts       |  76.33 kB
main.js             | main          |  34.20 kB
runtime.js          | runtime       |   6.63 kB

                    | Initial Total |   3.40 MB

Build at: 2021-10-25T02:19:20.036Z - Hash: 2dc1cd0da7856970b0d8 - Time: 17203ms

Warning: /home/rodrigo/Development/Angular/angular-supabase/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js depends on 'websocket'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies



** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

**18.** Ready! Access the URL `http://localhost:4200/` and check if the application is working. See the application working on [GitHub Pages](https://rodrigokamada.github.io/angular-supabase/) and [Stackblitz](https://stackblitz.com/edit/angular15-supabase).

![Angular Supabase](https://res.cloudinary.com/rodrigokamada/image/upload/v1635244373/Blog/angular-supabase/angular-supabase.png)



### Testing the application sign in

**1.** Let's test the application sign in. Access the URL `http://localhost:4200/`, fill in the field *Email* and click on the button *Sign in*.

![Application - Sign in](https://res.cloudinary.com/rodrigokamada/image/upload/v1635166098/Blog/angular-supabase/application-step1.png)

**2.** Open the email with the subject *Confirm Your Signup* and click on the link *Confirm your mail*.

![Application - Sign up email](https://res.cloudinary.com/rodrigokamada/image/upload/v1635165975/Blog/angular-supabase/application-step2.png)

**3.** At this point, you are already signed in. Click on the menu *Profile*.

![Application - Signed in](https://res.cloudinary.com/rodrigokamada/image/upload/v1635167045/Blog/angular-supabase/application-step3.png)

**4.** Fill in the fields *Name* and *Website* and click on the button *Update*.

![Application - Profile](https://res.cloudinary.com/rodrigokamada/image/upload/v1635168762/Blog/angular-supabase/application-step4.png)

**5.** Go back to the Supabase site and click on the menu *New query*.

![Supabase - SQL](https://res.cloudinary.com/rodrigokamada/image/upload/v1635169378/Blog/angular-supabase/supabase-step13.png)

**6.** Fill in the text field with *SELECT * FROM profiles;* content and click on the button *RUN*.

![Supabase - New query](https://res.cloudinary.com/rodrigokamada/image/upload/v1635170129/Blog/angular-supabase/supabase-step14.png)

**7.** Check the updated fields *username* and *website*.

![Supabase - Query result](https://res.cloudinary.com/rodrigokamada/image/upload/v1635170492/Blog/angular-supabase/supabase-step15.png)

**8.** Ready! We test the application sign in and profile update. Supabase documentation is available at [https://supabase.io/docs](https://supabase.io/docs).



## Cloning the application

**1.** Clone the repository.

```shell
git clone git@github.com:rodrigokamada/angular-supabase.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Run the application.

```shell
npm start
```

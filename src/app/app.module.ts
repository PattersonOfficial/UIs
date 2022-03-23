import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeEmailComponent } from './welcome-email/welcome-email.component';
import { InvoiceEmailComponent } from './invoice-email/invoice-email.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { TempEmailComponent } from './temp-email/temp-email.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeEmailComponent,
    InvoiceEmailComponent,
    PasswordResetComponent,
    TempEmailComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

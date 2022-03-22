import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TempEmailComponent } from './temp-email/temp-email.component';
import { WelcomeEmailComponent } from './welcome-email/welcome-email.component';
import { InvoiceEmailComponent } from './invoice-email/invoice-email.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const routes: Routes = [
  {
    path: '',
    component: TempEmailComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'welcome-email',
    component: WelcomeEmailComponent
  },
  {
    path: 'invoice',
    component: InvoiceEmailComponent
  },
  {
    path: 'reset',
    component: PasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

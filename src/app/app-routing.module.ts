import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './auth/user.guard';
import { AddfundComponent } from './component/addfund/addfund.component';
import { DisplayComponent } from './component/display/display.component';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TransferfundComponent } from './component/transferfund/transferfund.component';
import { WithdrawfundComponent } from './component/withdrawfund/withdrawfund.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'display', component: DisplayComponent,canActivate:[UserGuard] },
  { path: 'addfund', component:AddfundComponent,canActivate:[UserGuard]  },
  { path: 'withdrawfund', component:WithdrawfundComponent,canActivate:[UserGuard]  },
  { path: 'transferfund', component:TransferfundComponent,canActivate:[UserGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

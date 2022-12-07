import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { WalletService } from './service/wallet.service';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './component/display/display.component';
import { UserGuard } from './auth/user.guard';
import { AddfundComponent } from './component/addfund/addfund.component';
import { WithdrawfundComponent } from './component/withdrawfund/withdrawfund.component';
import { TransferfundComponent } from './component/transferfund/transferfund.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DisplayComponent,
    AddfundComponent,
    WithdrawfundComponent,
    TransferfundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RippleModule
    
  ],
  providers: [WalletService,UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { WalletService } from './service/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walletfrontend';
  isloggedin:boolean;
  constructor(private walletService:WalletService) { }

  ngOnInit() 
  {
    this.isloggedin=this.walletService.loggedinStatus;
    console.log("INside app comp");
    console.log(this.isloggedin);
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletService } from '../service/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router:Router, private walletService:WalletService ){}
  
  canActivate(): boolean 
  {
    console.log("can activate called");
   if(this.walletService.loggedinStatus)//this.isLoggedIn)
   {
     console.log(this.walletService.loggedinUser);
    return true;
   }
    else       
    {
      this.router.navigate(['/login']);
     return false;
     }
    }


  
}

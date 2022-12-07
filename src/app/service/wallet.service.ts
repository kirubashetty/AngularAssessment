import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginuser } from '../entity/loginuser';
import { Transferdto } from '../entity/transferdto';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  loggedinStatus:boolean=false;
  loggedinUser:Loginuser=new Loginuser();

  constructor(private httpClient:HttpClient) {
    console.log(this.loggedinStatus+" "+this.loggedinUser)
   }

  public getGreetMessage():Observable<any>{
    return this.httpClient.get("http://localhost:8080/",{responseType:"text"});
  }

  public addWallet(newuser:User):Observable<any>{

    return this.httpClient.post("http://localhost:8080/wallet",newuser,{responseType:"text"});
  }

  public login(newuser:Loginuser):Observable<any>{

     return this.httpClient.post("http://localhost:8080/wallet/login",newuser,{responseType:"text"});
  }
  
  public getbalance(id:number):Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/wallet/${id}`,{responseType:"text"});
  }

  public addfund(transferdto:Transferdto):Observable<any>
  {
    console.log(transferdto);
    return this.httpClient.post("http://localhost:8080/wallet/addfund",transferdto,{responseType:"text"});
  }
  public withdrawfund(transferdto:Transferdto):Observable<any>
  {
    console.log(transferdto);
    return this.httpClient.post("http://localhost:8080/wallet/withdraw",transferdto,{responseType:"text"});
  }
  public transferfund(transferdto:Transferdto):Observable<any>
  {
    console.log(transferdto);
    return this.httpClient.post("http://localhost:8080/wallet/fund",transferdto,{responseType:"text"});
  }

  public getwallet(id:number):Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/wallet/display/${id}`,{responseType:"json"});
  }
}

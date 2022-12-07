import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Loginuser } from 'src/app/entity/loginuser';
import { User } from 'src/app/entity/user';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  errorMsg: string;
  msg: string;

  constructor(private formBuilder: FormBuilder,private walletService:WalletService) { }
  currentUser:Loginuser;
  userid:number;
  userpassword:string;
  userbalance:number;
  username:string;
  userwallet:User=new User("","","",this.walletService.loggedinUser.getId);
  ngOnInit() {
  this.currentUser=this.walletService.loggedinUser;
  this.userid=this.currentUser.getId();
  this.userpassword=this.currentUser.getPassword();
  // this.walletService.getbalance(this.userid).subscribe(
  //   (data:number)=>{this.userbalance=data;this.errorMsg="";},
  //   (error:string)=>{
  //     this.msg="";
  //     this.errorMsg=JSON.stringify(error);

  //   }
  // );
  this.walletService.getwallet(this.userid).subscribe(
    (data:any)=>{
      this.errorMsg="";
      this.userwallet=data;
      console.log(typeof(this.userwallet));
      this.username=this.userwallet.name;
      this.userbalance=this.userwallet.balance;
      console.log(this.userwallet.balance+" "+this.username);
    },
    (error:string)=>{
      this.msg="";
      this.errorMsg=JSON.stringify(error);

    }
  );
  
  
  }
  
    
    
}
function newFunction() {
  return this;
}


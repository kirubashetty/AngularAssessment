import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Transferdto } from 'src/app/entity/transferdto';
import { WalletService } from 'src/app/service/wallet.service';
import { Greaternumber } from '../CustomValidator/greaternumber.validator';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent {
  addfundform: any;
  submitted: boolean;
  transferwallet:Transferdto=new Transferdto();
  msg: number;
  errorMsg: string;
  errorarray: string[];
  messages1:Message[]=[];
  messages2:Message[]=[];
  constructor(private formBuilder: FormBuilder,private walletService:WalletService,private router:Router) { }

  ngOnInit() {
      this.addfundform = this.formBuilder.group({
          amount:['',Validators.required]
      }, {
       
      });
  }
  get f() { return this.addfundform.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addfundform.invalid) {
          return;
      }

      
    }

  onReset() {
      this.submitted = false;
      this.addfundform.reset();
  }
  addamount()
  {
    this.transferwallet.setId(this.walletService.loggedinUser.getId());
    this.transferwallet.setAmount(this.addfundform.value.amount);
    this.walletService.addfund(this.transferwallet).subscribe(
      (data:number)=>{
        this.msg=data;
        this.errorMsg="";
        this.messages1=[
          {severity:'success', summary:'Success', detail:"Fund added successfully.Available Balance :"+this.msg}
        ]
      },
      (error:string)=>{
        this.errorMsg=JSON.stringify(error);
        console.log(this.errorMsg+" "+this.msg);
        this.errorarray=this.errorMsg.split(":");
        this.errorMsg=this.errorarray[this.errorarray.length-1].replace('}','');
        this.messages2=[
          {severity:'error', summary:'Error', detail:this.errorMsg}
        ]
      }
    );
    this.submitted = false;
      this.addfundform.reset();
    
  }
  }

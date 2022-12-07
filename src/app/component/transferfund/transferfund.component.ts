import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Transferdto } from 'src/app/entity/transferdto';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-transferfund',
  templateUrl: './transferfund.component.html',
  styleUrls: ['./transferfund.component.css']
})
export class TransferfundComponent {

  transferfundform: any;
  submitted: boolean;
  transferwallet:Transferdto=new Transferdto();
  msg: number;
  errorMsg: string;
  errorarray: string[];
  messages1:Message[]=[];
  messages2:Message[]=[];
  constructor(private formBuilder: FormBuilder,private walletService:WalletService,private router:Router) { }

  ngOnInit() {
      this.transferfundform = this.formBuilder.group({
          amount:['',Validators.required],
          toid:['',Validators.required]
      }, {
       
      });
  }
  get f() { return this.transferfundform.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.transferfundform.invalid) {
          return;
      }

      
    }

  onReset() {
      this.submitted = false;
      this.transferfundform.reset();
  }
  addamount()
  {
    this.transferwallet.setId(this.walletService.loggedinUser.getId());
    this.transferwallet.setAmount(this.transferfundform.value.amount);
    this.transferwallet.setToId(this.transferfundform.value.toid)
    this.walletService.transferfund(this.transferwallet).subscribe(
      (data:number)=>{
        this.msg=data;this.errorMsg="";
        this.messages1=[
          {severity:'success', summary:'Success', detail:"Fund Transferred successfully!!"}
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
    this.transferfundform.reset();
    
  }


}

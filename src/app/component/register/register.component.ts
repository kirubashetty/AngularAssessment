import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entity/user';
import { WalletService } from 'src/app/service/wallet.service';
import { MustMatch } from '../CustomValidator/must-match.validator';
import {Message,MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent {

  registerForm: FormGroup;
  submitted = false;
  greeting: string;
  errorMessage: string;
  newuser:User;
  msg: any;
  errorMsg: string;
  errorarray: string[];
  stat:boolean;
  messages1:Message[]=[];
  messages2:Message[]=[];
    constructor(private formBuilder: FormBuilder,private walletService:WalletService) { }
    
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            userid:['',Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
         
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        console.log(this.registerForm.value.firstName);
        this.newuser=new User(this.registerForm.value.firstName,this.registerForm.value.email,this.registerForm.value.password,this.registerForm.value.userid)
      
        console.log("add user called");
        console.log(this.newuser);
        this.walletService.addWallet(this.newuser).subscribe(
          (data:any)=>{
            this.msg=data;
            this.errorMsg="";
            this.messages1=[
              {severity:'success', summary:'Success', detail:'Registration Successfull'}
            ]
        },
          (error:any)=>{this.msg="";this.errorMsg=error;this.msg="";
          this.errorMsg=JSON.stringify(error);
          this.errorarray=this.errorMsg.split(":");
          this.errorMsg=this.errorarray[this.errorarray.length-1].replace('}','');
          this.errorMsg=this.errorMsg.replace('\"','');
          this.messages2=[
            {severity:'error', summary:'Error', detail:this.errorMsg}
          ]
        }
         
        );
        this.newuser=new User("","","",null);
       /* this.walletService.getGreetMessage().subscribe(
          (data:any)=>{this.greeting=data
            this.errorMessage="";
          },
          (error:any)=>{
    
            this.errorMessage="Server down , please try after some time.";
            this.greeting="";
          })
          console.log(this.greeting,this.errorMessage);*/
   
      }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}

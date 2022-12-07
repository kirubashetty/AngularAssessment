import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Messages } from 'primeng/messages';
import { Loginuser } from 'src/app/entity/loginuser';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  greeting: string;
  errorMessage: string;
  msg: string;
  errorMsg: string;
 
  errorarray:string[];
  loggedinUser: Loginuser;
  messages1:Message[]=[];
  messages2:Message[]=[];
  constructor(private formBuilder: FormBuilder,private walletService:WalletService,private router:Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            password: ['', Validators.required],
            userid:['',Validators.required]
        }, {
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // display form values on success
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        console.log(this.loginForm.value.userid,this.loginForm.value.password);
        this.loggedinUser=new Loginuser();
        this.loggedinUser.setId(this.loginForm.value.userid);
        this.loggedinUser.setPassword(this.loginForm.value.password);
        console.log("Login user called");
        console.log(this.loggedinUser);
        this.walletService.login(this.loggedinUser).subscribe(
          (data:string)=>{
            this.msg=data;
            this.errorMsg="";
            console.log(this.msg+" "+typeof(this.msg));
            this.walletService.loggedinStatus=true;
          this.walletService.loggedinUser=this.loggedinUser;
          console.log(this.walletService.loggedinStatus);
          this.messages1=[
            {severity:'success', summary:'Success', detail:"Logged in Successfully"}
          ]
          this.router.navigate(['/display']);
          },
          (error:string)=>{
            this.msg="";
            this.errorMsg=JSON.stringify(error);
            this.errorarray=this.errorMsg.split(":");
            this.errorMsg=this.errorarray[this.errorarray.length-1].replace('}','');
            this.messages2=[
              {severity:'error', summary:'Error', detail:this.errorMsg}
            ]
            this.walletService.loggedinStatus=false;
          this.walletService.loggedinUser=new Loginuser();
          this.loggedinUser=new Loginuser();
          }
        );
      
        // if(this.msg!="" && this.msg.localeCompare("true"))
        // {
        //   console.log("Inside login");
          
        // }
        // else{
        //   this.walletService.loggedinStatus=false;
        //   this.walletService.loggedinUser=new Loginuser();
        //   this.loggedinUser=new Loginuser();
        // }
      }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }

}

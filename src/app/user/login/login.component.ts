import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  loginForm:FormGroup;
  signupForm:FormGroup;
  constructor(private service:UserserviceService,private fb:FormBuilder,private route:Router,private toaster:ToastrService ) { 
    this.signupForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      role:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      zip:['',[Validators.required]],
    })

    this.loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(4),Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  register(){
    this.service.insert(this.signupForm.value).subscribe(result=>{
      this.data=result;
       console.log(this.data);
      this.toaster.success('register succesfully',"message")
      
    })
  }

  logdata(){
    // console.log(this.loginForm.value);
    this.service.logindata(this.loginForm.value).subscribe(result=>{
      this.data=result;
      console.log(this.data)
      if(result){
        let Token=this.data.token
        localStorage.setItem('TokenName',Token)
        
        this.route.navigate(['user/index'])
      }
    })
  }

}

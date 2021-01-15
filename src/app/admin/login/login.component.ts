import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminlogin:FormGroup
  data: any;

  constructor(private fb:FormBuilder,private service:UserserviceService,private route:Router) { 
    this.adminlogin=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(4),Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  login(){
      this.service.adminlogin(this.adminlogin.value).subscribe(result=>{
        this.data=result;
        if(result){
          this.route.navigate(['/dashboard'])
        }
      })
  }


}

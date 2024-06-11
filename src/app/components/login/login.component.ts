import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private service: AuthService, private router:Router){
      if(service.checkToken()){
        router.navigate(['dashboard']);
      }
    }

    fb=new FormGroup({
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    })


    onLogin(){
      if(this.fb.valid){
        this.service.checkLogin(this.fb.controls['username'].value,
        this.fb.controls['password'].value).subscribe({
          next:(val)=>{
            this.router.navigate(['dashboard/home'])
          },error(err){
            alert('Failed to Login !!!')
          }
        })
     }
    }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    constructor(private service: AuthService,private router:Router){

    if(!service.checkToken()){
      router. navigate(['login'])
    }
}

logout(){
  this.service.logout()
  this.router.navigate(['login'])
}
}
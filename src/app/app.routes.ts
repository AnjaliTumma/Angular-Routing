import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/components/home/home.component';
import { AboutComponent } from './components/dashboard/components/about/about.component';
import { ContactComponent } from './components/dashboard/components/contact/contact.component';
import { GalleryComponent } from './components/dashboard/components/gallery/gallery.component';
import { ServiceComponent } from './components/dashboard/components/service/service.component';
import { LogoutComponent } from './components/dashboard/components/logout/logout.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'forgot-password', component:ForgotPasswordComponent},
    {path:'dashboard', component:DashboardComponent,
    children:[
        {path:'home',component:HomeComponent},
        {path:'about', component:AboutComponent},
        {path:'service',component:ServiceComponent},
        {path:'gallery',component:GalleryComponent},
        {path:'contact',component:ContactComponent},
        {path:'logout',component:LogoutComponent}
    ]},
    {path:'**',component:PageNotFoundComponent}
];

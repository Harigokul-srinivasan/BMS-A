import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AppearalComponent } from './appearal/appearal.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"product", component:ProductComponent,canActivate:[AuthGuard]},
  {path:"product/:check", component:ExplorerComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[AuthGuard]},
  {path:"forgetpassword",component:ForgetpasswordComponent,canActivate:[AuthGuard]},
  {path:"Appearal",component:AppearalComponent,canActivate:[AuthGuard]},
  {path:"Accessories",component:AccessoriesComponent,canActivate:[AuthGuard]},
  {path:"Explorer",component:ExplorerComponent,canActivate:[AuthGuard]},
  {path:"Register",component:RegistrationComponent},
  {path:"Contact",component:ContactpageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

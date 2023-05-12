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
  {path:"product", component:ProductComponent},
  {path:"product/:check", component:ExplorerComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"Appearal",component:AppearalComponent},
  {path:"Accessories",component:AccessoriesComponent},
  {path:"Explorer",component:ExplorerComponent},
  {path:"Register",component:RegistrationComponent},
  {path:"Contact",component:ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

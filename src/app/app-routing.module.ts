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
import { AuthGuard } from './auth.guard';
import { UserGuard } from './guards/user.guard';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:"home",component:HomeComponent
},
  {path:"product", component:ProductComponent},
  {path:"product/:check", component:ExplorerComponent,

  //  children:[
  //   { path: 'button',}]
},
  {path:"login",component:LoginComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"Appearal",component:AppearalComponent},
  {path:"Accessories",component:AccessoriesComponent},
  {path:"Explorer",component:ExplorerComponent},
  {path:"Register",component:RegistrationComponent},
  {path:"Contact",component:ContactpageComponent ,},
  {path:"Checkout/:check",component:CheckoutComponent,canActivate:[AuthGuard]}
  //

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

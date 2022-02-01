import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { ColorGameGuard } from './color-game.guard';


const routes: Routes = [
  {path: "login", component : LoginComponent },
  {path: "logout", component : LogoutComponent , canActivate:[ColorGameGuard]},
  {path: "ColorGame", component : ColorGameComponent , canActivate:[ColorGameGuard]},
  { path: "", redirectTo: "ColorGame", pathMatch: "full" },
  //Othterwise redirect to ColorGame
  { path: "*", redirectTo: "ColorGame"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

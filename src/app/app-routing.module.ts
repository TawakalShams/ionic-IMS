import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService as AuthGuard } from "./service/auth-guard.service";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "insuarance",
    loadChildren: () =>
      import("./insuarance/insuarance.module").then(
        (m) => m.InsuarancePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about-routing.module").then(
        (m) => m.AboutPageRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "insuarance",
    loadChildren: () =>
      import("./insuarance/insuarance.module").then(
        (m) => m.InsuarancePageModule
      ),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

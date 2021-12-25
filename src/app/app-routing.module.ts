import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent, canActivate: [MsalGuard] },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      useHash: false,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? "enabled" : "disabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

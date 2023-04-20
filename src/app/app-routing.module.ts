import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectBankComponent } from './pages/select-bank/select-bank.component';
import { LinkBankAccountComponent } from './pages/link-bank-account/link-bank-account.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"select_bank",  pathMatch:"full"},
  {path:"select_bank", component:SelectBankComponent},
  {path:"link_bank_account", component:LinkBankAccountComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

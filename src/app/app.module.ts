import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectBankComponent } from './pages/select-bank/select-bank.component';
import { LinkBankAccountComponent } from './pages/link-bank-account/link-bank-account.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CustomPipe } from './pipes/custom.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectBankComponent,
    LinkBankAccountComponent,
    PageNotFoundComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

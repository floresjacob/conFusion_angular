import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { baseURL } from './shared/baseurl';
import {
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatSliderModule,
  MdCheckboxModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  entryComponents: [
        LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
    MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule, MdCheckboxModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

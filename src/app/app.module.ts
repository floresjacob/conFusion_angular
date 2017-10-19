import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DishService } from './services/dish.service';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Promotion } from './shared/promotion';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
    MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DishService, Promotion],
  bootstrap: [AppComponent]
})
export class AppModule { }

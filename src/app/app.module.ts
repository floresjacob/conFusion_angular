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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
    MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule,
    FlexLayoutModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

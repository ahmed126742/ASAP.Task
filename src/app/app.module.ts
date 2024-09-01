import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UserService } from './user.service';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    HttpClientModule,
    InputsModule,
    LabelModule,
    GridModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { AppRoutingModule } from './app-routing.module';
import { InputMaskModule } from 'primeng/inputmask';
import { FormServiceService } from './form-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FloatLabelModule } from 'primeng/floatlabel';


@NgModule ({
    declarations:[AppComponent],
    imports: [MessagesModule, ButtonModule, ToastModule, CardModule, 
        InputTextModule, BrowserModule, BrowserAnimationsModule, 
        MessageModule, AppRoutingModule, InputMaskModule, 
        ReactiveFormsModule, HttpClientModule, FloatLabelModule],
    bootstrap: [AppComponent],
    providers: [FormServiceService]})

export class AppModule {}
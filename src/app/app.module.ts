import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatExpansionModule,

} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatGridListModule,
        NgbModule,
        MatExpansionModule,
    ],
    exports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatGridListModule,
        NgbModule,
        MatExpansionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


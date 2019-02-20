import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { SidebarService } from 'src/app/services/service.index';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
})
export class AppComponent {
    panelOpenState = false;
    active: Boolean = false;

    constructor () { }

    changeState() {
        if (this.active === false) {
            this.active = true;
        } else {
            this.active = false;
        }
        console.log(this.active);
    }

    openSubmenu(event) {
        console.log(event);
    }





}

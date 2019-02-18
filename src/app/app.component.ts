import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { SidebarService } from 'src/app/services/service.index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
})
export class AppComponent {
    mode = new FormControl('over');

    isMenuOpen = true;

    constructor () { }

    changeValue(mode) {

        if (mode.value === 'over') {
            mode.value = 'side';

            console.log(mode.value);
        } else {
            mode.value = 'over';
            console.log(mode.value);
        }
        // console.log(mode);
    }


}

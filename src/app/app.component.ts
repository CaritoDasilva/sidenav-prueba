import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { SidebarService } from 'src/app/services/service.index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
})
export class AppComponent {
    options: FormGroup;

    title = 'AngularMaterialGettingStarted';

    isMenuOpen = true;
    contentMargin = 240;

    task: string[] = [
        'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
    ];
    constructor (fb: FormBuilder) {
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }

    onToolbarMenuToggle() {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;

        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        } else {
            this.contentMargin = 240;
        }
    }
    // sidenavEvents(str) {
    //   console.log(str);
    // }

}

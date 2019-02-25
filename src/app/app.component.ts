import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { MatAccordion, MatExpansionPanel } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { SidebarService } from 'src/app/services/service.index';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
})
export class AppComponent implements OnInit {
    panelOpenState = false;
    active: Boolean = false;
    generalSubmenu: Boolean = false;
    farematchSubmenu: Boolean = false;
    waiverSubmenu: Boolean = false;
    hoverColorMenuGeneral: String = '#3b3e4e';
    hoverColorMenuFarematch: String = '#3b3e4e';
    hoverColorMenuWaiver: String = '#3b3e4e';
    selected: Boolean = false;

    constructor (private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() { // Recién en este punto tendrás acceso al valor
        Object.entries(this.el.nativeElement).forEach(element => {

            console.log(element);
        });
    }

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

    openCloseGeneral() {
        this.generalSubmenu = !this.generalSubmenu;
        this.waiverSubmenu = false;
        this.farematchSubmenu = false;
    }

    openCloseFarematch() {
        this.farematchSubmenu = !this.farematchSubmenu;
        this.waiverSubmenu = false;
        this.generalSubmenu = false;
    }

    openCloseWaiver() {
        this.waiverSubmenu = !this.waiverSubmenu;
        this.generalSubmenu = false;
        this.farematchSubmenu = false;
    }

    handleMouseHoverGeneral(hoverColorMenu) {
        // this.selected = className;         

        this.hoverColorMenuGeneral = '#3B3E4E';
    }

    handleMouseHoverFarematch() {
        this.hoverColorMenuFarematch = '#3B3E4E';
    }

    handleMouseHoverWaiver() {
        this.hoverColorMenuWaiver = '#3B3E4E';
        console.log(this.hoverColorMenuGeneral);

    }

    handleMouseHoverOverGeneral(hoverColorMenu) {
        this.hoverColorMenuGeneral = '#333645';
    }

    handleMouseHoverOverFarematch() {

        this.hoverColorMenuFarematch = '#333645';
    }

    handleMouseHoverOverWaiver() {

        this.hoverColorMenuWaiver = '#333645';
        console.log(this.hoverColorMenuWaiver);

    }

}

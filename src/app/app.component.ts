import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { MenuService } from './menu.service';
import { Sidenav } from './sidenav.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['./app.component.css']
})
export class AppComponent implements OnInit {
    listMenu: Sidenav[];
    activeSidenav: Boolean = false;

    constructor (private menuService: MenuService) { }
    ngOnInit() {
        console.log(this.menuService.menu);
        this.getMenu();
    }

    getMenu() {
        this.listMenu = this.menuService.menu;
        console.log(this.listMenu);
    }

    changeState() {
        this.activeSidenav = !this.activeSidenav;
        console.log(this.activeSidenav);
    }

    changeAccordionStatus(i) {
        this.listMenu[i].active = !this.listMenu[i].active;
        console.log(i);
    }

}

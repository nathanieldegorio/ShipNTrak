import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'menu-section',
    templateUrl: './menu-component.html'
})
export class MenuComponent implements OnInit{
     menu: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        
    }

   
}

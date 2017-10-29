import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'shipmentmgt',
    templateUrl: './shipmentmgt-menu.component.html'
})
export class ShipmentMgtComponent implements OnInit{
     menu: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        
        this.sub = this.route.params.subscribe(params => {
            this.menu = params['menuid'] as string; 
        });
    }

   
}

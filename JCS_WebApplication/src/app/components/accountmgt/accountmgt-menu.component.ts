import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'accountmgt',
    templateUrl: './accountmgt-menu.component.html'
})
export class AccountMgtComponent implements OnInit{
     menu: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        
        this.sub = this.route.params.subscribe(params => {
            this.menu = params['menuid'] as string; 
        });
    }

   
}

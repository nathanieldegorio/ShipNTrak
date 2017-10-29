import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
    constructor(private _httpService: HttpClient) {

    }


    ngOnInit() {
       
    }
    
}

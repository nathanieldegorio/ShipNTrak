import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerAccount } from './customerprofile.model';
import { SystemBranch } from '../systembranch/systembranch.model';
import { UserLevel } from '../userlevel/userlevel.model';
import { UserStatus } from '../userstatus/userstatus.model';

import $ from 'jquery';


@Component({
    selector: 'customer-type-main',
    templateUrl: './customerprofile-list.component.html'
})
export class CustomerAccountComponent implements OnInit, AfterViewInit{
    public selectedModel: CustomerAccount;
    public apiValues: CustomerAccount[] = [];
    public branchValues: SystemBranch[] = [];
     

    constructor(private _httpService: HttpClient) { }
    public errMessage: string;
    
    ngOnInit() {
        this.refreshCollectionTypes();
        this.loadCollectionTypes();
        this.newSelect();
        this.errMessage = '';
    }

    ngAfterViewInit() {
        $('.ui.dropdown').dropdown();
    }


    public searchkey: string;

    search()
    {
        const body = JSON.stringify(this.searchkey);
        let header = new HttpHeaders();

        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CustomerAccount[];
            console.log(this.apiValues);
        });
    }

    loadCollectionTypes()
    {
        
        const body = JSON.stringify('');
        let header = new HttpHeaders();

        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.branchValues = values as SystemBranch[];
        });
        
    }

    refreshCollectionTypes()
    {
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        
        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CustomerAccount[];
            console.log(this.apiValues);
          });

    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CustomerAccount[];
        });
    }

    viewThis(model: CustomerAccount) {
        this.selectedModel = model;
    
    }

 
    newSelect()
    {
        this.selectedModel = new CustomerAccount();
        this.selectedModel._customerID = 'New';
        this.selectedModel._firstname = '';
        this.selectedModel._middlename = '';
        this.selectedModel._lastname = '';
        this.selectedModel._address = '';
        this.selectedModel._email = '';
        this.selectedModel._company = '';
        this.selectedModel._phoneNumber = '';
        this.selectedModel._isVIP = '0';
        this.selectedModel._businessPhone = '';
        this.selectedModel._accountNumber = '';
     
        if (this.branchValues.length > 0)
        {
            this.selectedModel._closestBranch = this.branchValues[0]._branchID;

        }
      
       
    }

    updateCustomerAccount()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/customer/CustomerProfile/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.errMessage = values as string;
            this.refreshCollectionTypes();
        });
    }

   
    addCustomerAccount() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/customer/CustomerProfile/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {

            this.errMessage = values;
            this.refreshCollectionTypes();
        });
    }
    
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAccount } from './useraccount.model';
import { SystemBranch } from '../systembranch/systembranch.model';
import { UserLevel } from '../userlevel/userlevel.model';
import { UserStatus } from '../userstatus/userstatus.model';
import { UserAccess } from './useraccess.model';
import $ from 'jquery';


@Component({
    selector: 'useraccount-type-main',
    templateUrl: './useraccount-list.component.html'
})
export class UserAccountComponent implements OnInit, AfterViewInit{
    public selectedModel: UserAccount;
    public apiValues: UserAccount[] = [];
    public branchValues: SystemBranch[] = [];
    public userStatusValues: UserStatus[] = [];
    public userLevelValues: UserLevel[] = [];
    public userAccessValues: UserAccess[] = [];
    

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

        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserAccount[];
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

        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.userLevelValues = values as UserLevel[];
        });

        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.userStatusValues = values as UserStatus[];
        });
        
    }

    refreshCollectionTypes()
    {
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        
        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserAccount[];
            console.log(this.apiValues);
          });

    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserAccount[];
        });
    }

    viewThis(model: UserAccount) {
        this.selectedModel = model;
        this.getUserAccess();
    }

    getUserAccess()
    {
        console.log(this.selectedModel._userAccountID);
        const body = JSON.stringify(this.selectedModel._userAccountID);
        this._httpService.post('/api/Administration/UserAccount/ListAccess', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.userAccessValues = values as UserAccess[];
            console.log(values);
        });
    }

    newSelect()
    {
        this.selectedModel = new UserAccount();
        this.selectedModel._userAccountID = 'New';
        this.selectedModel._firstname = '';
        this.selectedModel._middlename = '';
        this.selectedModel._lastname = '';
        this.selectedModel._address = '';
        this.selectedModel._employeeReference = '';
        this.selectedModel._userLogin = '';
        this.selectedModel._userAccessKey = '';
        this.selectedModel._createdBy = '0';
        this.selectedModel._createdOn = '08/24/2017';
        this.selectedModel._updatedBy = '0';
        this.selectedModel._updatedOn = '08/24/2017';
        this.selectedModel._userLevel = '0';
        this.selectedModel._userStatus = '0';
        this.selectedModel._passwordReset = "1";
        this.selectedModel._isAir = '0';
        this.selectedModel._isSea = '0';
        this.selectedModel._isBranch = '0';
        if (this.branchValues.length > 0)
        {
            this.selectedModel._userBranch = this.branchValues[0]._branchID;

        }
        if (this.userLevelValues.length > 0)
        {
            this.selectedModel._userLevel = this.userLevelValues[0]._userLevelCode;
        }
        if (this.userStatusValues.length > 0)
        {
            this.selectedModel._userStatus = this.userStatusValues[0]._userStatusCode;
        }
       
    }

    updateUserAccount()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserAccount/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.errMessage = values as string;
            this.refreshCollectionTypes();
        });
    }

    resetPassword(model : UserAccount) {
        model._passwordReset = "1";
        const body = JSON.stringify(model);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserAccount/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            this.errMessage = values;
            this.refreshCollectionTypes();
        });
    }

    addUserAccount() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserAccount/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {

            this.errMessage = values;
            this.refreshCollectionTypes();
        });
    }
    
}

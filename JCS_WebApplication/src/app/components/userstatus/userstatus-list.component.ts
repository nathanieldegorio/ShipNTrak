import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStatus } from '../userstatus/userstatus.model';

@Component({
    selector: 'userstatus-type-main',
    templateUrl: './userstatus-list.component.html'
})
export class UserStatusComponent implements OnInit{
    public selectedModel: UserStatus;
    public apiValues: UserStatus[] = [];
    constructor(private _httpService: HttpClient) { }
    public errMessage: string;


    ngOnInit() {
        this.refreshCollectionTypes();
        this.errMessage = '';
    }

    public searchkey: string;

    search() {
        const body = JSON.stringify(this.searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserStatus[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserStatus[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserStatus[];
        });
    }

    viewThis(model: UserStatus) {
        this.selectedModel = model;
    }

    newSelect()
    {
        this.selectedModel = new UserStatus();
        this.selectedModel._userStatusCode = 'New';
        this.selectedModel._usDisplay = '';
        this.selectedModel._usDescription = '';
        this.selectedModel._disableFeaturesFlag = '0';
      
    }

    updateUserStatus()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserStatus/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok')
            {
                this.errMessage = values;
            }
            
            this.refreshCollectionTypes();
        });
    }

    addUserStatus() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserStatus/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok') {
                this.errMessage = values;
            }
            this.refreshCollectionTypes();
        });
    }
    
}

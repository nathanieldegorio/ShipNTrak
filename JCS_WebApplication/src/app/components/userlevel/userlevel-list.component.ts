import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLevel } from './userlevel.model';


@Component({
    selector: 'userlevel-type-main',
    templateUrl: './userlevel-list.component.html'
})
export class UserLevelComponent implements OnInit{
    public selectedModel: UserLevel;
    public apiValues: UserLevel[] = [];
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
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserLevel[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserLevel[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as UserLevel[];
        });
    }

    viewThis(model: UserLevel) {
        this.selectedModel = model;
    }

    newSelect()
    {
        this.selectedModel = new UserLevel();
        this.selectedModel._userLevelCode = 'New';
        this.selectedModel._ulDisplayName = '';
        this.selectedModel._ulDescription = '';
        this.selectedModel._isAdmin = '0';
      
    }

    updateUserLevel()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserLevel/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok')
            {
                this.errMessage = values;

            }
            this.refreshCollectionTypes();
        });
    }

    addUserLevel() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/UserLevel/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok') {
                this.errMessage = values;

            }
            this.refreshCollectionTypes();
        });
    }
    
}

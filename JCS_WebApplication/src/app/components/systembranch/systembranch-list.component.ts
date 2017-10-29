import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemBranch } from './systembranch.model';


@Component({
    selector: 'systembranch-type-main',
    templateUrl: './systembranch-list.component.html'
})
export class SystemBranchComponent implements OnInit{
    public selectedModel: SystemBranch;
    public apiValues: SystemBranch[] = [];
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
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as SystemBranch[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as SystemBranch[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as SystemBranch[];
        });
    }

    viewThis(model: SystemBranch) {
        this.selectedModel = model;
    }

    newSelect()
    {
        this.selectedModel = new SystemBranch();
        this.selectedModel._branchID = 'New';
        this.selectedModel._branchName = '';
        this.selectedModel._manager = '0';
        this.selectedModel._parentBranch = '0';
        this.selectedModel._routeDisplay = '';
        this.selectedModel._shortCode = '';
    }

    updateSystemBranch()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/SystemBranch/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok')
            {
                this.errMessage = values;
            }
            
            this.refreshCollectionTypes();
        });
    }

    addSystemBranch() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/SystemBranch/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok') {
                this.errMessage = values;
            }
            this.refreshCollectionTypes();
        });
    }
    
}

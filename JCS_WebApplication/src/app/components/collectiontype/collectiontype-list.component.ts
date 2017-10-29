import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CollectionType } from './collectiontype.model'


@Component({
    selector: 'collection-type-main',
    templateUrl: './collectiontype-list.component.html'
})
export class CollectionTypeComponent implements OnInit{
    public selectedModel: CollectionType;
    public apiValues: CollectionType[] = [];
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
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CollectionType[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CollectionType[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CollectionType[];
        });
    }

    viewThis(model: CollectionType) {
        this.selectedModel = model;
    }

    newSelect()
    {
        this.selectedModel = new CollectionType();
        this.selectedModel._collectionTypeCode = 'New';
        this.selectedModel._ctDisplayName = '';
        this.selectedModel._collectableFlag = '0';
        this.selectedModel._collectOnDeliveryFlag = '0';
        this.selectedModel._ctBilledTo = '0';
    }

    updateCollectionType()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CollectionType/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok') {
                this.errMessage = values;
            }

            this.refreshCollectionTypes();
        });
    }

    addCollectionType() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CollectionType/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'Ok')
            {
                this.errMessage = values;
            }
            
            this.refreshCollectionTypes();
        });
    }
    
}

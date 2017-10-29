import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShipmentType } from './shipmenttype.model';


@Component({
    selector: 'shipment-type-main',
    templateUrl: './shipmenttype.component.html'
})
export class ShipmentTypeComponent implements OnInit {
    public selectedModel: ShipmentType;
    public apiValues: ShipmentType[] = [];
    public errMessage: string;
    public isTransactionFlag: boolean;

    constructor(private _httpService: HttpClient) { }
   


    ngOnInit() {
        this.refreshCollectionTypes();
        this.selectedModel = new ShipmentType();
        this.errMessage = '';
        this.isTransactionFlag = false;
    }

    public searchkey: string;

    search() {
        const body = JSON.stringify(this.searchkey);
        let header = new HttpHeaders();

        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as ShipmentType[];
            console.log(this.apiValues);
        });
    }

    refreshCollectionTypes() {
        const body = JSON.stringify('');
        let header = new HttpHeaders();

        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as ShipmentType[];
            console.log(this.apiValues);
        });

    }

    searchCollectionTypes(searchkey: string) {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as ShipmentType[];
        });
    }

    viewThis(model: ShipmentType) {
        console.log(model);
        this.isTransactionFlag = (model._isTransaction.toLowerCase()=='true');
        console.log(Boolean(model._isTransaction.toLowerCase()));
        this.selectedModel = model;
    }

    newSelect() {
        this.selectedModel._shipmentType = '0';
        this.selectedModel._description = '';
        this.selectedModel._isTransaction = 'False';
    }

    updateUserAccount() {
        this.selectedModel._isTransaction = String(this.isTransactionFlag);
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/ShipmentType/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.errMessage = values as string;
            this.refreshCollectionTypes();
        });
    }

  

    changeTransactionFlag()
    {
        this.isTransactionFlag = !this.isTransactionFlag;
    }

    addUserAccount() {
        this.selectedModel._isTransaction = String(this.isTransactionFlag);
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/ShipmentType/New', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {

            this.errMessage = values;
            this.refreshCollectionTypes();
        });
    }

}

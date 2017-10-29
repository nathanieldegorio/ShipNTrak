import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentType } from './paymenttype.model'


@Component({
    selector: 'payment-type-main',
    templateUrl: './paymenttype-list.component.html'
})
export class PaymentTypeComponent implements OnInit{
    public selectedModel: PaymentType;
    public apiValues: PaymentType[] = [];
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
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as PaymentType[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as PaymentType[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as PaymentType[];
        });
    }

    viewThis(model: PaymentType) {
        this.selectedModel = model;
    }

    newSelect() {
        this.selectedModel = new PaymentType();
        this.selectedModel._paymentTypeCode = 'New';
        this.selectedModel._ptDisplayName = '';
        this.selectedModel._ptDescription = '';
        this.selectedModel._checkFlag = '0';
    }

    updatePaymentType()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/PaymentType/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'OK') {
                this.errMessage = values;
            }
            this.refreshCollectionTypes();
        });
    }

    addPaymentType() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/PaymentType/New', body, {
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

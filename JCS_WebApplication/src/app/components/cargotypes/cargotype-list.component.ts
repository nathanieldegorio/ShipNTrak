import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CargoType } from './cargotype.model';


@Component({
    selector: 'cargo-type',
    templateUrl: './cargotype-list.component.html'
})
export class CargoTypeComponent implements OnInit{
    public selectedModel: CargoType;
    public apiValues: CargoType[] = [];
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
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CargoType[];
        });
    }

    refreshCollectionTypes()
    {
        this.newSelect();
        const body = JSON.stringify('');
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CargoType[];
        });
    }
    
    searchCollectionTypes(searchkey : string)
    {
        const body = JSON.stringify(searchkey);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(values => {
            this.apiValues = values as CargoType[];
        });
    }

    viewThis(model: CargoType) {
        this.selectedModel = model;
    }

    newSelect() {
        this.selectedModel = new CargoType();
        this.selectedModel._cargoID = 'New';
        this.selectedModel._cargoCode = '';
        this.selectedModel._cargoName = '';
        this.selectedModel._cargoDescription = '0';
    }

    updateCargoType()
    {
        
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CargoType/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            if (values != 'OK') { 
                this.errMessage = values;
            }
            this.refreshCollectionTypes();
        });
    }

    addPCargoType() {
        const body = JSON.stringify(this.selectedModel);
        let header = new HttpHeaders();
        this._httpService.post('/api/Administration/CargoType/New', body, {
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

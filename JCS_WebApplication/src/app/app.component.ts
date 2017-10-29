import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserAccount } from './components/useraccount/useraccount.model';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import $ from 'jquery';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    public menu: string;
    public account: UserAccount;
    public errorMsg: string;
    public isLoggedIn: boolean;
    public loadingState: boolean;
    public confirmPassword: string;

    constructor(private _httpService: HttpClient) {

    }


    ngAfterViewInit() {
        $('.ui.dropdown').dropdown();
    }

    ngOnInit() {
        this.menu = 'home';
        this.checkSession();
        this.account = new UserAccount();
        this.errorMsg = '';
    }

    checkSession() {
        this.isLoggedIn = false;
        this._httpService.post('/api/User/LoggedIn', null, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => {
            console.log(values);
            if (values == 'True') { this.isLoggedIn = true; } else { this.isLoggedIn = false; }
            this.loadingState = false;
        });
    }

    confirmPass() {
        if (this.account._userAccessKey == this.confirmPassword) {
            this.errorMsg = '';
        } else {
            this.errorMsg = 'Passwords do not match';
        }
    }

    login() {
        if (this.account._userAccessKey.trim() == "") {
            this.errorMsg = "Please enter password."
        } else if (this.account._userLogin.trim() == "") {
            this.errorMsg = "Please enter username."
        } else {
            this.loadingState = true;
            const body = JSON.stringify(this.account);
            let header = new HttpHeaders();
           
            this._httpService.post('/api/User/Login', body, {
                headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
            }).subscribe(values => {

                this.account = values as UserAccount;
                if (this.account._userAccountID == "Invalid Username/Password") {
                    this.errorMsg = this.account._userAccountID;
                    this.loadingState = false;
                } else
                    if (this.account._passwordReset == "True") {
                        this.errorMsg = "Your current password is system generated. Please change password and login again.";
                        this.account._userAccessKey = '';
                        this.confirmPassword = '';
                        this.loadingState = false;
                    } else {
                        this.checkSession();
                    }


            });
        }

    }
    updatePass()
    {
        this.account._passwordReset = "0";
        const body = JSON.stringify(this.account);
        let header = new HttpHeaders();
        this._httpService.post('/api/administration/UserAccount/Edit', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => { this.login(); });
    }
    logout()
    {
        const body = JSON.stringify(this.account);
        let header = new HttpHeaders();
        this._httpService.post('/api/User/Logout', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(values => { this.checkSession(); });
    }

    reset()
    {
        this.account = new UserAccount();
        this.errorMsg = '';
    }

    setMenu(menuclick: string)
    {
        this.menu = menuclick;
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";


import { CollectionTypeComponent } from './components/collectiontype/collectiontype-list.component';
import { PaymentTypeComponent } from './components/paymenttype/paymenttype-list.component';
import { UserStatusComponent } from './components/userstatus/userstatus-list.component';
import { SystemBranchComponent } from './components/systembranch/systembranch-list.component';
import { UserLevelComponent } from './components/userlevel/userlevel-list.component';
import { UserAccountComponent } from './components/useraccount/useraccount-list.component';
import { AdministrationComponent } from './components/administration/administration-menu.component';
import { ShipmentTypeComponent } from './components/shipmenttype/shipmenttype.component';
import { HomeComponent } from './components/home/home.component';
import { AccountMgtComponent } from './components/accountmgt/accountmgt-menu.component';
import { ShipmentMgtComponent } from './components/shipmentmgt/shipmentmgt-menu.component';
import { CustomerAccountComponent } from './components/customerprofile/customerprofile-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { UnitComponent } from './components/units/units-list.component';
import { CargoTypeComponent } from './components/cargotypes/cargotype-list.component';

@NgModule({
  declarations: [
      AppComponent,
      CollectionTypeComponent,
      PaymentTypeComponent,
      UserStatusComponent,
      SystemBranchComponent,
      UserLevelComponent,
      UserAccountComponent,
      AdministrationComponent,
      ShipmentTypeComponent,
      HomeComponent,
      AccountMgtComponent,
      ShipmentMgtComponent,
      CustomerAccountComponent,
      MenuComponent,
      CargoTypeComponent,
      UnitComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot([
          {
              path: '',
              redirectTo: 'home',
              pathMatch: 'full'
          },
          {
              path: 'home',
              component: HomeComponent
          },
          {
              path: 'administration',
              component: AdministrationComponent
          },
          {
              path: 'administration/:menuid',
              component: AdministrationComponent
          },
          {
              path: 'customeraccounts',
              component: AccountMgtComponent
          },
          {
              path: 'customeraccounts/:menuid',
              component: AccountMgtComponent
          },
          {
              path: 'shipments',
              component: ShipmentMgtComponent
          },
          {
              path: 'shipments/:menuid',
              component: ShipmentMgtComponent
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

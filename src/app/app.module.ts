import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatasourceService } from './datasource.service';
import { ServerService } from './server.service';
import { HttpurlService } from '@httpservices/httpurl.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServerService,
    DatasourceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: XHRBackend, useClass: HttpurlService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

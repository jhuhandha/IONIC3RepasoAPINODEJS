import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { ProductosListarPage } from '../pages/productos-listar/productos-listar';
import { ProductosCrearPage } from '../pages/productos-crear/productos-crear';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductoProvider } from '../providers/producto/producto';
import { ProductoModificarPage } from '../pages/producto-modificar/producto-modificar';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProductosListarPage,
    ProductosCrearPage,
    ProductoModificarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProductosListarPage,
    ProductosCrearPage,
    ProductoModificarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoProvider
  ]
})
export class AppModule {}

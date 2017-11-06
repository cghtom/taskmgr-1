import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { HttpModule } from '@angular/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from "../app-routing.module";
import { ServicesModule } from "../services/services.module";
import { AppStoreModule } from '../reducers'
import { AppEffectsModule } from '../effects'

import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from "../utils/svg.util";
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/concat'
import 'rxjs/add/observable/zip'
import 'rxjs/add/observable/range'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/combineLatest'

import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/defaultIfEmpty'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/count'
import 'rxjs/add/operator/withLatestFrom'

import '../utils/debug.util'

import 'hammerjs'

@NgModule({
  imports: [
    AppRoutingModule,
    ServicesModule.forRoot(),
    AppStoreModule,
    AppEffectsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule,
               ir: MdIconRegistry,
               ds: DomSanitizer ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载模块')
    }

    loadSvgResources(ir, ds)
  }
}

// Angularのモジュールをインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// AppComponentコンポーネントをインポート
// app.component.tsをインポート
import { AppComponent } from './app.component';
import { HeroinesComponent } from './heroines.component'
import { HeroineDetailComponent } from './heroine-detail.component';
import { HeroineService } from './-share/services/heroine.service';

// モジュールに関する情報を宣言
// @マークをデコレーターと呼ぶらしい。
@NgModule({
  // 使用するコンポーネントクラスを記述する。
  declarations: [
    AppComponent,
    HeroinesComponent,
    HeroineDetailComponent
  ],
  // アプリケーションをブラウザで動かすために用いられる（おまじない）
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

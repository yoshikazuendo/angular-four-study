// Angularのモジュールをインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// AppComponentコンポーネントをインポート
// app.component.tsをインポート
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroinesComponent } from './heroines.component'
import { HeroineDetailComponent } from './heroine-detail.component';
import { HeroineService } from './-share/services/heroine.service';

// モジュールに関する情報を宣言
// @マークをデコレーターと呼ぶらしい。
@NgModule({
  // 使用するコンポーネントクラスを記述する。
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroinesComponent,
    HeroineDetailComponent
  ],
  // アプリケーションをブラウザで動かすために用いられる（おまじない）
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        // パスの指定がない場合のリダイレクト先を指定（ここではdashboardを指定）
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        // ダッシュボード用のRouterモジュール
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // forRootメソッド：pathプロパティにURLのパス、componentプロパティにコンポーネント名を定義すると、
        // 画面を遷移した時に、ブラウザのアドレスバーにこのパスが加わる。
        // テンプレートで<router-outlet></router-outlet>を指定すると、リンクしたパスのコンポーネントがそこに差し込まれる。
        path: 'heroines',
        component: HeroinesComponent
      }
    ])
  ],
  // providersに指定すると、子のコンポーネントがサービスの同じインスタンスを使える！
  providers: [ HeroineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
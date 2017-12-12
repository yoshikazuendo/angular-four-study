import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroineDetailComponent } from './heroine-detail.component';
import { HeroinesComponent } from './heroines.component';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
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
        // コロン+プロパティ名とすることで、動的な値をpathにすることができる。
        path: 'detail/:id',
        component: HeroineDetailComponent
    },
    {
        // forRootメソッド：pathプロパティにURLのパス、componentプロパティにコンポーネント名を定義すると、
        // 画面を遷移した時に、ブラウザのアドレスバーにこのパスが加わる。
        // テンプレートで<router-outlet></router-outlet>を指定すると、リンクしたパスのコンポーネントがそこに差し込まれる。
        path: 'heroines',
        component: HeroinesComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    // RouterModuleは、exportsプロパティに指定することで、ほかのモジュールからココのRouterLinkやRouterOutletといったRouterのディレクティブが使えるようになる。
    exports: [RouterModule]
})
export class AppRoutingModule {}
// RxJSのswitchMapオペレーターをインポート（パラメーターの受取で使用？）
import 'rxjs/add/operator/switchMap';
import { Component, /*Input,*/ OnInit } from '@angular/core';
// ダッシュボードに戻る機能を加えるためのモジュールを呼び出す（ActivatedRoute, Params, Location）
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Heroine } from './-share/services/heroine';
import { HeroineService } from './-share/services/heroine.service';

@Component({
    selector: 'heroine-detail',
    templateUrl: 'heroine-detail.component.html',
    styleUrls: ['./heroine-detail.component.scss']
})

// @Inputデコレーターを付与することで、他コンポーネントから受け取れる（binding）ようになる。
export class HeroineDetailComponent implements OnInit {
    // @Input()
    heroine: Heroine;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private heroineService: HeroineService
    ) {}
    ngOnInit(): void {
        // ActibatedRoute.paramsプロパティから、switchMapオペレーターで関数を呼び、
        // 関数の引数（params）からidプロパティが取得できる。
        // （引数に+演算子を加えたのは数値に変換するため）
         this.route.params
         .switchMap((params: Params) => this.heroineService.getHeroine(+params['id']))
         .subscribe((heroine: Heroine) => this.heroine = heroine);
    }

    goBack(): void {
        // ブラウザの履歴に従ってURLを戻る。
        this.location.back();
    }
}
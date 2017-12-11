// コンポーネントで利用しているモジュールをインポート
import { Component, OnInit } from '@angular/core';
import { Heroine } from './-share/services/heroine';
import { HeroineService } from './-share/services/heroine.service';
import { HEROINES } from './-share/services/mock-heroines';

// コンポーネントに関する情報を宣言（デコレータ関数）
// デコレータ関数は、渡された引数に基いて、そのあとに宣言されたクラス（AppComponent）を実行時に処理する。
@Component({
  // コンポーネントの適用先を表すセレクター式
  selector: 'my-heroines',
  // コンポーネントに適するビュー（テンプレート）
  // template: `<h1>Hello {{name}}</h1>`,
  // TypeScriptの構文：バッククォートでくくると複数行にまたがる文字列を1つの文字列リテラルとして表現できるようになる
  // templateパラメーターで、簡易的にテンプレートを定義できる。
  // 複雑であれば、templateUrlパラメーターを使う
  // template: `<h1>{{title}}</h1>
  //   <p class="main">{{contents}}</p>`,
  // templateパラメーターで指定するurlは、アプリケーションルートからのパスを指定する
  templateUrl: 'heroines.component.html',
  // providesプロパティ：指定されたサービスのインスタンスを、コンストラクタで受け取れるようになる。
  providers: [ HeroineService ],
  // cssをコンポーネント別に設定できる。他のコンポーネントには影響されなくなる。
  styles: [`
    .selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroines {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroines li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: 0.5em;
			padding: 0.3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroines li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroines li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: 0.1em;
		}
		.heroines .text {
			position: relative;
			top: -3px;
		}
		.heroines .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: 0.8em;
			border-radius: 4px 0 0 4px;
		}
  `]
})

// コンポーネントクラスを準備
// exportキーワードは「外部に公開する」という意味
export class HeroinesComponent implements OnInit {
  title = 'サンプルアプリ';
  heroines: Heroine[];  
  selectedHeroine : Heroine;

  // Componentデコレーター.providersプロパティに指定されたサービスを受け取れるようになる。
  constructor(private heroineService: HeroineService) { }

  // OnInitクラスのngOnInit()メソッド：データバインディング後に一度だけ呼び出される。
  ngOnInit(): void {
	this.getHeroines();
  }
  // サービスを呼び出すメソッドを作る。
  getHeroines(): void {
	// こっちは同期処理
	//   this.heroines = this.heroineService.getHeroines();
	// こっちは非同期処理。
	// Service側のPromiseオブジェクトが解放されると、Promise.thenメソッドが実行されるので、第一引数にコールバック処理を書く。
	this.heroineService.getHeroines().then((heroines: Heroine[]) =>
		this.heroines = heroines);
  }

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    console.log(this.selectedHeroine); // 確認用

    var ret = "endo,aiwa";
    var value = ret.split(',');
    
  }
}

// {{...}}式は自由だが、利用できない演算子がある
// 
// コンポーネントで利用しているモジュールをインポート
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroine } from './-share/services/heroine';
import { HeroineService } from './-share/services/heroine.service';
// import { HEROINES } from './-share/services/mock-heroines';

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
  styleUrls: ['./heroines.component.scss']
})

// コンポーネントクラスを準備
// exportキーワードは「外部に公開する」という意味
export class HeroinesComponent implements OnInit {
  title = 'サンプルアプリ';
  heroines: Heroine[];  
  selectedHeroine : Heroine;

  // Componentデコレーター.providersプロパティに指定されたサービスを受け取れるようになる。
  constructor(
    private router: Router,
    private heroineService: HeroineService
  ) { }

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
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeroine.id]);
  }
}

// {{...}}式は自由だが、利用できない演算子がある
// 